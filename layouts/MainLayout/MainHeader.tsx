import { Button, Container, Flex, Group, Header, Title } from "@mantine/core";
import Link from "next/link";

export default function MainHeader() {
  return (
    <Header height={68}>
      <Container>
        <Flex h={68} justify="space-between" align="center">
          <Title variant="gradient" align="center">
            Fluence
          </Title>
          <Group>
            <Link href="/sign-up" passHref legacyBehavior>
              <Button variant="white" compact>
                회원가입
              </Button>
            </Link>
            <Link href="/sign-in" passHref legacyBehavior>
              <Button variant="white" compact>
                로그인
              </Button>
            </Link>
          </Group>
        </Flex>
      </Container>
    </Header>
  );
}
