import MainLayout from "@/layouts/MainLayout";
import Specialities from "@/pages/translator-profile/Specialities";
import { Group, Progress, Stack, Text, Title } from "@mantine/core";

export default function Index() {
  return (
    <Stack spacing="xl">
      <Title>번역사 프로필</Title>

      <Stack spacing={0}>
        <Group spacing={0}>
          <Text size="xs">프로필 완성도</Text>
          &nbsp;
          <Text size="xs" color="blue">
            30%
          </Text>
        </Group>
        <Progress value={30} />
      </Stack>
      <Specialities />
    </Stack>
  );
}

Index.getLayout = MainLayout;
