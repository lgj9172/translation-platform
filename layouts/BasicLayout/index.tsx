import { Container } from "@mantine/core";
import { ReactElement } from "react";

export default function BasicLayout(page: ReactElement) {
  return (
    <Container size="xs" py={40}>
      {page}
    </Container>
  );
}
