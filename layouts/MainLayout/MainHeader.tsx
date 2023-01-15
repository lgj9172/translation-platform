import { Button, Container, Flex, Header, Text } from "@mantine/core";

export default function MainHeader() {
  return (
    <Header height={68}>
      <Container>
        <Flex h={68} justify="space-between" align="center">
          <Text size="lg" weight="bold">
            FLUENT
          </Text>
          <Button>로그인</Button>
        </Flex>
      </Container>
    </Header>
  );
}
