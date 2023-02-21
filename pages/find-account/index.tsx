import BasicLayout from "@/layouts/BasicLayout";
import { Button, Group, PasswordInput, Stack, Text, TextInput, Title, UnstyledButton } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Index() {
  const router = useRouter();

  const [phase, setPhase] = useState(1);

  const handleClickBack = () => {
    router.back();
  };

  const handleClickGetAuthNumber = () => {
    setPhase(2);
  };

  const handleClickSetAuthNumber = () => {
    router.push("/renew-password");
  };

  return (
    <Stack>
      <Group>
        <UnstyledButton onClick={handleClickBack}>
          <IconArrowLeft size={34} />
        </UnstyledButton>
      </Group>
      <Stack>
        <Title variant="gradient">이메일/비밀번호 찾기</Title>
        <Text fz="sm" fw="bold">
          가입했던 이메일이나 비밀번호를 잊으셨나요?
          <br />
          휴대전화 인증으로 이메일을 찾거나 비밀번호를 재설정 할 수 있습니다.
        </Text>
      </Stack>
      <Stack spacing="xl">
        {phase === 1 && (
          <Stack spacing="xs">
            <TextInput label="이메일" withAsterisk />
            <TextInput label="휴대전화번호" withAsterisk />
            <Stack align="end" spacing="xs">
              <Text size="xs">인증번호발송 버튼을 눌러 휴대전화로 인증번호를 발송해주세요.</Text>
              <Button disabled={phase >= 2} onClick={handleClickGetAuthNumber}>
                인증번호발송
              </Button>
            </Stack>
          </Stack>
        )}
        {phase === 2 && (
          <Stack spacing="xs">
            <TextInput label="인증번호" withAsterisk />
            <Stack align="end" spacing="xs">
              <Text size="xs">발송된 인증번호를 입력하고 확인버튼을 눌러주세요.</Text>
              <Button disabled={phase >= 3} onClick={handleClickSetAuthNumber}>
                인증번호확인
              </Button>
            </Stack>
          </Stack>
        )}
        {phase === 3 && (
          <Stack spacing="xs">
            <PasswordInput label="새로운 비밀번호" withAsterisk />
            <PasswordInput label="새로운 비밀번호 재입력" withAsterisk />
            <Group position="right" spacing="xs">
              <Button variant="filled">비밀번호변경</Button>
            </Group>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

Index.getLayout = BasicLayout;
