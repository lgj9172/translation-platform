import TranslationCard from "@/components/TranslationCard";
import MainLayout from "@/layouts/MainLayout";
import { Carousel } from "@mantine/carousel";
import { Flex, Select, SimpleGrid, Space, Stack, Title } from "@mantine/core";

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
          <TranslationCard />
          <TranslationCard />
          <TranslationCard />
          <TranslationCard />
          <TranslationCard />
          <TranslationCard />
        </Stack>
      </Stack>
    </Stack>
  );
}

Index.getLayout = MainLayout;
