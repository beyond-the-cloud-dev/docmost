import { Container, Paper, Stack, Text, Title, Group, Anchor, Badge, Box, ThemeIcon } from "@mantine/core";
import { IconBrandGithub, IconScale, IconGitFork, IconInfoCircle } from "@tabler/icons-react";
import SettingsTitle from "@/components/settings/settings-title.tsx";
import { getAppName } from "@/lib/config.ts";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("About Docmost")} - {getAppName()}
        </title>
      </Helmet>
      <SettingsTitle title={t("About Docmost")} />

      <Container size="md" p={0}>
        <Stack gap="lg">
          {/* Main Info Card */}
          <Paper shadow="xs" p="xl" radius="md" withBorder>
            <Stack gap="md">
              <Group>
                <ThemeIcon size={50} radius="md" variant="light">
                  <IconInfoCircle size={30} />
                </ThemeIcon>
                <div>
                  <Title order={2}>Docmost</Title>
                  <Text size="sm" c="dimmed">
                    {t("Open-source collaborative wiki and documentation software")}
                  </Text>
                </div>
              </Group>
            </Stack>
          </Paper>

          {/* Fork Information */}
          <Paper shadow="xs" p="xl" radius="md" withBorder>
            <Stack gap="md">
              <Group>
                <ThemeIcon size={40} radius="md" variant="light" color="blue">
                  <IconGitFork size={24} />
                </ThemeIcon>
                <Title order={3}>{t("Fork Information")}</Title>
              </Group>

              <Text size="sm">
                {t("This installation is a fork of the original Docmost project. Forks allow developers to create custom versions while maintaining connection to the original codebase.")}
              </Text>

              <Box>
                <Text size="sm" fw={500} mb="xs">
                  {t("Fork Repository")}:
                </Text>
                <Anchor
                  href="https://github.com/beyond-the-cloud-dev/docmost"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                >
                  <Group gap="xs">
                    <IconBrandGithub size={18} />
                    beyond-the-cloud-dev/docmost
                  </Group>
                </Anchor>
              </Box>

              <Box>
                <Text size="sm" fw={500} mb="xs">
                  {t("Original Repository")}:
                </Text>
                <Anchor
                  href="https://github.com/docmost/docmost"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                >
                  <Group gap="xs">
                    <IconBrandGithub size={18} />
                    docmost/docmost
                  </Group>
                </Anchor>
              </Box>
            </Stack>
          </Paper>

          {/* License Information */}
          <Paper shadow="xs" p="xl" radius="md" withBorder>
            <Stack gap="md">
              <Group>
                <ThemeIcon size={40} radius="md" variant="light" color="green">
                  <IconScale size={24} />
                </ThemeIcon>
                <Title order={3}>{t("License")}</Title>
              </Group>

              <Group>
                <Badge size="lg" variant="light" color="green">
                  GNU AGPL-3.0
                </Badge>
              </Group>

              <Text size="sm">
                {t("Docmost is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). This is a free, copyleft license that requires:")}
              </Text>

              <Stack gap="xs" pl="md">
                <Text size="sm">
                  • {t("Source code availability for all users")}
                </Text>
                <Text size="sm">
                  • {t("Distribution of modifications under the same license")}
                </Text>
                <Text size="sm">
                  • {t("Network use is considered distribution")}
                </Text>
                <Text size="sm">
                  • {t("Preservation of copyright and license notices")}
                </Text>
              </Stack>

              <Text size="sm" c="dimmed" fs="italic">
                {t("This license ensures that improvements made to Docmost remain available to the community.")}
              </Text>

              <Box>
                <Anchor
                  href="https://www.gnu.org/licenses/agpl-3.0.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                >
                  {t("Read the full license text")}
                </Anchor>
              </Box>
            </Stack>
          </Paper>

          {/* Additional Information */}
          <Paper shadow="xs" p="xl" radius="md" withBorder>
            <Stack gap="md">
              <Title order={3}>{t("Source Code Access")}</Title>

              <Text size="sm">
                {t("As required by the AGPL-3.0 license, the complete source code for this installation is available at the fork repository above. You have the freedom to:")}
              </Text>

              <Stack gap="xs" pl="md">
                <Text size="sm">
                  • {t("View and study the source code")}
                </Text>
                <Text size="sm">
                  • {t("Modify the software for your needs")}
                </Text>
                <Text size="sm">
                  • {t("Distribute copies of the software")}
                </Text>
                <Text size="sm">
                  • {t("Distribute modified versions")}
                </Text>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </>
  );
}
