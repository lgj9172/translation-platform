import BasicLayout from "@/layouts/BasicLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEventHandler } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const SignUpSchema = z
  .object({
    name: z.string().min(1, "이름이 입력되지 않았어요."),
    email: z.string().email("유효하지 않은 이메일이에요."),
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
    agreeAll: z.boolean(),
    agreeUse: z.boolean().refine((value) => value, "이용을 위해서는 이용 약관에 동의해야 해요."),
    agreePrivacy: z.boolean().refine((value) => value, "이용을 위해서는 개인정보 처리방침에 동의해야 해요."),
    agree14: z.boolean().refine((value) => value, "이용을 위해서는 만 14세 이상이어야 해요."),
    agreeMarketing: z.boolean(),
  })
  .refine(({ password1, password2 }) => password1 === password2, {
    message: "비밀번호 확인이 잘못 입력되었어요.",
    path: ["password2"],
  });

type SignUpType = z.infer<typeof SignUpSchema>;

const SignUpDefaultValues: SignUpType = {
  name: "",
  email: "",
  password1: "",
  password2: "",
  agreeAll: false,
  agreeUse: false,
  agreePrivacy: false,
  agree14: false,
  agreeMarketing: false,
};

export default function Index() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<SignUpType>({
    mode: "onChange",
    resolver: zodResolver(SignUpSchema),
    defaultValues: SignUpDefaultValues,
  });

  const handleChangeAgreeAll: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked } = e.target;
    setValue("agreeAll", checked);
    setValue("agreeUse", checked);
    setValue("agreePrivacy", checked);
    setValue("agree14", checked);
    setValue("agreeMarketing", checked);
  };

  const handleSignUp: SubmitHandler<SignUpType> = () => {
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
        <Title variant="gradient">회원가입</Title>
        <Text fz="sm" fw="bold">
          Fluence; 통번역 전문가 플랫폼
          <br />
          간단한 가입을 통해 통번역 전문가들을 쉽게 만나보세요.
          <br />
          통번역이 필요하신분은 고품질의 통번역 전문가를, <br />
          능력있는 번역가는 저렴한 수수료로 다양한 고객분들을 만나실 수 있습니다.
        </Text>
      </Stack>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <Stack>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <TextInput {...field} error={errors.name?.message} label="이름" withAsterisk />}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => <TextInput {...field} error={errors.email?.message} label="이메일" withAsterisk />}
          />
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
          <Controller
            name="agreeAll"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                value={field.name}
                checked={field.value}
                error={errors.agreeAll?.message}
                label={<Text fw={700}>아래 약관에 모두 동의합니다.</Text>}
                onChange={handleChangeAgreeAll}
              />
            )}
          />
          <Controller
            name="agreeUse"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                value={field.name}
                checked={field.value}
                error={errors.agreeUse?.message}
                label="(필수) 이용 약관에 동의합니다."
              />
            )}
          />
          <Controller
            name="agreePrivacy"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                value={field.name}
                checked={field.value}
                error={errors.agreePrivacy?.message}
                label="(필수) 개인정보 처리방침에 동의합니다."
              />
            )}
          />
          <Controller
            name="agree14"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                value={field.name}
                checked={field.value}
                error={errors.agree14?.message}
                label="(필수) 만 14세 이상입니다."
              />
            )}
          />
          <Controller
            name="agreeMarketing"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                value={field.name}
                checked={field.value}
                error={errors.agreeMarketing?.message}
                label="(선택) 마케팅 정보 수신에 동의합니다."
              />
            )}
          />
          <Group position="right">
            <Button type="submit" disabled={!isValid}>
              본인인증
            </Button>
          </Group>
        </Stack>
      </form>

      <Stack spacing="xs" align="end">
        <Link href="/sign-in" passHref legacyBehavior>
          <Anchor>이미 계정이 있으신가요?</Anchor>
        </Link>
        <Link href="/find-account" passHref legacyBehavior>
          <Anchor>이메일이나 비밀번호를 잊으셨나요?</Anchor>
        </Link>
      </Stack>
    </Stack>
  );
}

Index.getLayout = BasicLayout;
