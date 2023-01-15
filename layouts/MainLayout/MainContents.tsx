import { Container } from "@mantine/core";
import { ReactElement } from "react";

interface MainContentsProps {
  page: ReactElement;
}

export default function MainContents({ page }: MainContentsProps) {
  return <Container>{page}</Container>;
}
