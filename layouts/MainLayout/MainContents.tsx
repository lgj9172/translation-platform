import { Container, Space, Stack } from "@mantine/core";
import { ReactElement } from "react";

interface MainContentsProps {
  page: ReactElement;
}

export default function MainContents({ page }: MainContentsProps) {
  return (
    <Container>
      <Stack>
        <Space />
        {page}
        <Space />
      </Stack>
    </Container>
  );
}
