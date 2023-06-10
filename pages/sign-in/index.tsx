import BasicLayout from "@/layouts/BasicLayout";

export default function Index() {
  // const router = useRouter();

  // const kakaoParams = {
  //   client_id: `${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}`,
  //   redirect_uri: `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`,
  //   response_type: "code",
  // };

  // const kakaoUrl = `${process.env.NEXT_PUBLIC_KAKAO_API}?${new URLSearchParams(kakaoParams).toString()}`;

  // const handleClickBack = () => {
  //   router.back();
  // };

  return (
    <div />
    // <Stack>
    //   <Group>
    //     <UnstyledButton onClick={handleClickBack}>
    //       <IconArrowLeft size={34} />
    //     </UnstyledButton>
    //   </Group>

    //   <Stack>
    //     <Title variant="gradient">로그인</Title>
    //     <Text fz="sm" fw="bold">
    //       Fluence; 통번역 전문가 플랫폼
    //       <br />
    //       로그인 이후 이용 가능합니다.
    //     </Text>
    //   </Stack>

    //   <Stack>
    //     <Link href={kakaoUrl} passHref legacyBehavior>
    //       <Button>카카오 계정으로 로그인 하기</Button>
    //     </Link>
    //   </Stack>
    // </Stack>
  );
}

Index.getLayout = BasicLayout;
