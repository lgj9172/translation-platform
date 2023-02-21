import BasicLayout from "@/layouts/BasicLayout";
import modal from "@/library/utils/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Group, PasswordInput, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const RenewPasswordSchema = z
  .object({
    password1: z
      .string()
      .min(1, "비밀번호가 입력되지 않았어요.")
      .min(8, "비밀번호는 최소 8자리 이상이어야 해요.")
      .max(16, "비밀번호는 최대 16자리 이하이어야 해요."),
    password2: z
      .string()
      .min(1, "비밀번호가 입력되지 않았어요.")
      .min(8, "비밀번호는 최소 8자리 이상이어야 해요.")
      .max(16, "비밀번호는 최대 16자리 이하이어야 해요."),
  })
  .refine(({ password1, password2 }) => password1 === password2, {
    message: "비밀번호 확인이 잘못 입력되었어요.",
    path: ["password2"],
  });

type RenewPasswordType = z.infer<typeof RenewPasswordSchema>;

const RenewPasswordDefaultValues: RenewPasswordType = {
  password1: "",
  password2: "",
};

export default function Index() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RenewPasswordType>({
    mode: "onChange",
    resolver: zodResolver(RenewPasswordSchema),
    defaultValues: RenewPasswordDefaultValues,
  });

  const handleRenewPassword: SubmitHandler<RenewPasswordType> = () => {
    modal({
      type: "alert",
      title: "비밀번호 재설정",
      content: "새로운 비밀번호로 재설정 되었어요. 다시 로그인 해주세요.",
    });
    router.push("/sign-in");
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
        <Title variant="gradient">비밀번호 재설정</Title>
        <Text fz="sm" fw="bold">
          OOO님,
          <br />
          적용할 새로운 비밀번호를 입력해주세요.
        </Text>
      </Stack>

      <form onSubmit={handleSubmit(handleRenewPassword)}>
        <Stack>
          <Controller
            name="password1"
            control={control}
            render={({ field }) => (
              <PasswordInput {...field} error={errors.password1?.message} label="비밀번호" withAsterisk />
            )}
          />
          <Controller
            name="password2"
            control={control}
            render={({ field }) => (
              <PasswordInput {...field} error={errors.password2?.message} label="비밀번호 확인" withAsterisk />
            )}
          />
          <Group position="right">
            <Button type="submit" disabled={!isValid}>
              비밀번호 재설정
            </Button>
          </Group>
        </Stack>
      </form>
    </Stack>
  );
}

Index.getLayout = BasicLayout;
