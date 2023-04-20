import MainLayout from "@/layouts/MainLayout";
import { Carousel } from "@mantine/carousel";
import { Badge, Card, Flex, Group, Select, SimpleGrid, Space, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { IconHeart, IconSend } from "@tabler/icons";

export default function Index() {
  return (
    <Stack spacing="xs">
      <Carousel height={200} slideGap="md" controlsOffset="md" loop withIndicators>
        <Carousel.Slide bg="gray">
          <Flex h="100%" align="center" justify="center">
            Fluence
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide bg="gray">
          <Flex h="100%" align="center" justify="center">
            Fluence
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide bg="gray">
          <Flex h="100%" align="center" justify="center">
            Fluence
          </Flex>
        </Carousel.Slide>
      </Carousel>

      <Space h="xl" />

      <Stack>
        <Title>번역</Title>

        <SimpleGrid cols={4} breakpoints={[{ maxWidth: "xs", cols: 2 }]}>
          <Select
            placeholder="언어"
            data={[
              { value: "en_ko", label: "영한" },
              { value: "ko_en", label: "한영" },
            ]}
          />
          <Select
            placeholder="마감일"
            data={[
              { value: "today", label: "오늘" },
              { value: "week", label: "이번주" },
            ]}
          />
          <Select
            placeholder="번역료"
            data={[
              { value: "10000", label: "만원이상" },
              { value: "100000", label: "십만원이상" },
            ]}
          />
          <Select placeholder="분야" data={[{ value: "it", label: "IT" }]} />
        </SimpleGrid>

        <Stack>
          <UnstyledButton>
            <Card h={200} shadow="sm" p={0} radius="md" withBorder>
              <Group h="100%" w="100%" noWrap>
                <Stack w={80} h="100%" bg="blue" align="center" justify="center" spacing={0}>
                  <Text fz="xl" fw={700} color="white" align="center">
                    2/15
                  </Text>
                  <Text fz="xl" fw={700} color="white" align="center">
                    15:00
                  </Text>
                </Stack>
                <Stack style={{ flexGrow: 1 }}>
                  <Group>
                    <Badge color="green">한영</Badge>
                    <Badge color="blue">IT</Badge>
                    <Badge color="red">PPT</Badge>
                  </Group>
                  <Stack spacing={0}>
                    <Text fz="xl" fw={700}>
                      번역 요청 부탁드립니다.
                    </Text>
                    <Text fz="md" fw={500}>
                      발표용 자료로 되도록 빨리 필요합니다.
                    </Text>
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
              </Group>
            </Card>
          </UnstyledButton>
          <UnstyledButton>
            <Card h={200} shadow="sm" p={0} radius="md" withBorder>
              <Group h="100%" w="100%" noWrap>
                <Stack w={80} h="100%" bg="blue" align="center" justify="center" spacing={0}>
                  <Text fz="xl" fw={700} color="white" align="center">
                    2/15
                  </Text>
                  <Text fz="xl" fw={700} color="white" align="center">
                    15:00
                  </Text>
                </Stack>
                <Stack style={{ flexGrow: 1 }}>
                  <Group>
                    <Badge color="green">한영</Badge>
                    <Badge color="blue">IT</Badge>
                    <Badge color="red">PPT</Badge>
                  </Group>
                  <Stack spacing={0}>
                    <Text fz="xl" fw={700}>
                      번역 요청 부탁드립니다.
                    </Text>
                    <Text fz="md" fw={500}>
                      발표용 자료로 되도록 빨리 필요합니다.
                    </Text>
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
              </Group>
            </Card>
          </UnstyledButton>
          <UnstyledButton>
            <Card h={200} shadow="sm" p={0} radius="md" withBorder>
              <Group h="100%" w="100%" noWrap>
                <Stack w={80} h="100%" bg="blue" align="center" justify="center" spacing={0}>
                  <Text fz="xl" fw={700} color="white" align="center">
                    2/15
                  </Text>
                  <Text fz="xl" fw={700} color="white" align="center">
                    15:00
                  </Text>
                </Stack>
                <Stack style={{ flexGrow: 1 }}>
                  <Group>
                    <Badge color="green">한영</Badge>
                    <Badge color="blue">IT</Badge>
                    <Badge color="red">PPT</Badge>
                  </Group>
                  <Stack spacing={0}>
                    <Text fz="xl" fw={700}>
                      번역 요청 부탁드립니다.
                    </Text>
                    <Text fz="md" fw={500}>
                      발표용 자료로 되도록 빨리 필요합니다.
                    </Text>
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
              </Group>
            </Card>
          </UnstyledButton>
          <UnstyledButton>
            <Card h={200} shadow="sm" p={0} radius="md" withBorder>
              <Group h="100%" w="100%" noWrap>
                <Stack w={80} h="100%" bg="blue" align="center" justify="center" spacing={0}>
                  <Text fz="xl" fw={700} color="white" align="center">
                    2/15
                  </Text>
                  <Text fz="xl" fw={700} color="white" align="center">
                    15:00
                  </Text>
                </Stack>
                <Stack style={{ flexGrow: 1 }}>
                  <Group>
                    <Badge color="green">한영</Badge>
                    <Badge color="blue">IT</Badge>
                    <Badge color="red">PPT</Badge>
                  </Group>
                  <Stack spacing={0}>
                    <Text fz="xl" fw={700}>
                      번역 요청 부탁드립니다.
                    </Text>
                    <Text fz="md" fw={500}>
                      발표용 자료로 되도록 빨리 필요합니다.
                    </Text>
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
              </Group>
            </Card>
          </UnstyledButton>
          <UnstyledButton>
            <Card h={200} shadow="sm" p={0} radius="md" withBorder>
              <Group h="100%" w="100%" noWrap>
                <Stack w={80} h="100%" bg="blue" align="center" justify="center" spacing={0}>
                  <Text fz="xl" fw={700} color="white" align="center">
                    2/15
                  </Text>
                  <Text fz="xl" fw={700} color="white" align="center">
                    15:00
                  </Text>
                </Stack>
                <Stack style={{ flexGrow: 1 }}>
                  <Group>
                    <Badge color="green">한영</Badge>
                    <Badge color="blue">IT</Badge>
                    <Badge color="red">PPT</Badge>
                  </Group>
                  <Stack spacing={0}>
                    <Text fz="xl" fw={700}>
                      번역 요청 부탁드립니다.
                    </Text>
                    <Text fz="md" fw={500}>
                      발표용 자료로 되도록 빨리 필요합니다.
                    </Text>
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
              </Group>
            </Card>
          </UnstyledButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

Index.getLayout = MainLayout;
