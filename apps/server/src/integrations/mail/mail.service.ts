import { Inject, Injectable, Logger } from '@nestjs/common';
import { MAIL_DRIVER_TOKEN } from './mail.constants';
import { MailDriver } from './drivers/interfaces/mail-driver.interface';
import { MailMessage } from './interfaces/mail.message';
import { EnvironmentService } from '../environment/environment.service';
import { InjectQueue } from '@nestjs/bullmq';
import { QueueName, QueueJob } from '../queue/constants';
import { Queue } from 'bullmq';
import { render } from '@react-email/render';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor(
    @Inject(MAIL_DRIVER_TOKEN) private mailDriver: MailDriver,
    private readonly environmentService: EnvironmentService,
    @InjectQueue(QueueName.EMAIL_QUEUE) private emailQueue: Queue,
  ) {}

  async sendEmail(message: MailMessage): Promise<void> {
    if (message.template) {
      // in case this method is used directly. we do not send the tsx template from queue
      message.html = await render(message.template, {
        pretty: true,
      });
      message.text = await render(message.template, { plainText: true });
    }

    let from = this.environmentService.getMailFromAddress();
    if (message.from) {
      from = message.from;
    }

    const sender = `${this.environmentService.getMailFromName()} <${from}> `;

    this.logger.debug(`Sending email - MAIL_FROM_ADDRESS: ${this.environmentService.getMailFromAddress()}`);
    this.logger.debug(`Sending email - MAIL_FROM_NAME: ${this.environmentService.getMailFromName()}`);
    this.logger.debug(`Sending email - message.from: ${message.from}`);
    this.logger.debug(`Sending email - computed from: ${from}`);
    this.logger.debug(`Sending email - final sender: ${sender}`);
    this.logger.debug(`Sending email - to: ${message.to}`);

    await this.mailDriver.sendMail({ from: sender, ...message });
  }

  async sendToQueue(message: MailMessage): Promise<void> {
    if (message.template) {
      // transform the React object because it gets lost when sent via the queue
      message.html = await render(message.template, {
        pretty: true,
      });
      message.text = await render(message.template, {
        plainText: true,
      });
      delete message.template;
    }
    await this.emailQueue.add(QueueJob.SEND_EMAIL, message);
  }
}
