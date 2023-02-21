import BasicLayout from "@/layouts/BasicLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { Anchor, Button, Group, PasswordInput, Stack, Text, TextInput, Title, UnstyledButton } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const SignInSchema = z.object({
  email: z.string().email("유효하지 않은 이메일이에요."),
  password: z.string().min(1, "비밀번호가 입력되지 않았어요."),
});

type SignInType = z.infer<typeof SignInSchema>;

const SignInDefaultValues: SignInType = {
  email: "",
  password: "",
};

export default function Index() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInType>({
    mode: "onChange",
    resolver: zodResolver(SignInSchema),
    defaultValues: SignInDefaultValues,
  });

  const handleSignIn: SubmitHandler<SignInType> = () => {
    router.push("/");
  };

  const handleClickBack = () => {
    router.back();
  };

  return (
    <Stack>
      <Group>
        <UnstyledButton onClick={handleClickBack}>
          <IconArrowLeft size={34} />
        </UnstyledButton>
      </Group>

      <Stack>
        <Title variant="gradient">로그인</Title>
        <Text fz="sm" fw="bold">
          Fluence; 통번역 전문가 플랫폼
          <br />
          로그인 이후 이용 가능합니다.
        </Text>
      </Stack>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <Stack>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <TextInput {...field} error={errors.email?.message} label="이메일" withAsterisk />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput {...field} error={errors.password?.message} label="비밀번호" withAsterisk />
            )}
          />
          <Group position="right">
            <Button type="submit" disabled={!isValid}>
              로그인
            </Button>
          </Group>
        </Stack>
      </form>

      <Stack spacing="xs" align="end">
        <Link href="/find-account" passHref legacyBehavior>
          <Anchor>이메일이나 비밀번호를 잊으셨나요?</Anchor>
        </Link>
        <Link href="/sign-up" passHref legacyBehavior>
          <Anchor>아직 회원이 아니신가요?</Anchor>
        </Link>
      </Stack>
    </Stack>
  );
}

Index.getLayout = BasicLayout;
