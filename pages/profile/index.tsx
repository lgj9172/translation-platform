import MainLayout from "@/layouts/MainLayout";
import { Button, Stack, Switch, TextInput, Title } from "@mantine/core";

export default function Index() {
  return (
    <Stack>
      <Title>프로필</Title>
      <Stack>
        <TextInput label="이름" value="이름" disabled />
        <TextInput label="이메일" value="이메일@이메일.이메일" disabled />
        <TextInput label="전화번호" value="010-0000-0000" disabled />
        <Switch.Group label="마케팅 정보 수신 동의">
          <Stack mt="xs">
            <Switch value="react" label="SMS 수신 동의" />
            <Switch value="svelte" label="이메일 수신 동의" />
          </Stack>
        </Switch.Group>
        <Stack align="end">
          <Button>비밀번호 변경하기</Button>
          <Button>전화번호 변경하기</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

Index.getLayout = MainLayout;
