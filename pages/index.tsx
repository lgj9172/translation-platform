import MainLayout from "@/layouts/MainLayout";
import { Anchor, Stack } from "@mantine/core";
import Link from "next/link";

export default function Index() {
  return (
    <Stack spacing="xs">
      <Link href="/sign-in" passHref legacyBehavior>
        <Anchor>로그인 페이지</Anchor>
      </Link>
      <Link href="/sign-up" passHref legacyBehavior>
        <Anchor>회원가입 페이지</Anchor>
      </Link>
      <Link href="/find-account" passHref legacyBehavior>
        <Anchor>이메일/비밀번호 찾기</Anchor>
      </Link>
      <Link href="/renew-password" passHref legacyBehavior>
        <Anchor>비밀번호 재설정 페이지</Anchor>
      </Link>
    </Stack>
  );
}

Index.getLayout = MainLayout;
