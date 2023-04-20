import { ActionIcon, Button, Container, Flex, Group, Header, Menu, Title } from "@mantine/core";
import { IconMenu } from "@tabler/icons";
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
            <Link href="/" passHref legacyBehavior>
              <Button variant="white" compact>
                번역
              </Button>
            </Link>
            <Link href="/notice" passHref legacyBehavior>
              <Button variant="white" compact>
                공지사항
              </Button>
            </Link>
            <Link href="/faq" passHref legacyBehavior>
              <Button variant="white" compact>
                FAQ
              </Button>
            </Link>
            <Link href="/suggest" passHref legacyBehavior>
              <Button variant="white" compact>
                제안하기
              </Button>
            </Link>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <ActionIcon>
                  <IconMenu />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Link href="/my-page" passHref legacyBehavior>
                  <Menu.Item>마이페이지</Menu.Item>
                </Link>
                <Link href="/profile" passHref legacyBehavior>
                  <Menu.Item>프로필</Menu.Item>
                </Link>
                <Link href="/translator-profile" passHref legacyBehavior>
                  <Menu.Item>번역사 프로필</Menu.Item>
                </Link>
                <Menu.Divider />
                <Link href="/sign-in" passHref legacyBehavior>
                  <Menu.Item>로그인/회원가입</Menu.Item>
                </Link>
                <Link href="/sign-out" passHref legacyBehavior>
                  <Menu.Item>로그아웃</Menu.Item>
                </Link>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Flex>
      </Container>
    </Header>
  );
}
