import { Badge, Card, Group, Space, Stack, Text, UnstyledButton } from "@mantine/core";
import { IconHeart, IconSend } from "@tabler/icons";

export default function TranslationCard() {
  return (
    <UnstyledButton>
      <Card shadow="sm" p={0} radius="md" withBorder>
        <Stack h="100%" w="100%" spacing={0}>
          <Stack bg="blue" p="xs">
            <Text fz="xl" fw={700} color="white">
              2월 15일 목요일 15:00
            </Text>
          </Stack>
          <Stack style={{ flexGrow: 1 }} p="xs" spacing="xs">
            <Group>
              <Badge color="green">한영</Badge>
              <Badge color="blue">IT</Badge>
              <Badge color="red">PPT</Badge>
            </Group>
            <Stack spacing={0}>
              <Text fz="xl" fw={700}>
                번역 요청 부탁드립니다.
              </Text>
              <Text fz="xs">발표용 자료로 되도록 빨리 필요합니다.</Text>
            </Stack>
            <Group position="apart">
              <Stack spacing={0}>
                <Text fz="xs">1,200글자</Text>
                <Text fz="xl" fw={700}>
                  50,000원
                </Text>
              </Stack>
              <Group>
                <Group spacing={4}>
                  <IconSend />4
                </Group>
                <Group spacing={4}>
                  <IconHeart />5
                </Group>
              </Group>
            </Group>
          </Stack>
          <Space />
        </Stack>
      </Card>
    </UnstyledButton>
  );
}
