import { REACT_QUERY } from "@/constants/keys";
import BasicLayout from "@/layouts/BasicLayout";
import ClientWithoutAuth from "@/library/clients/clientWithoutAuth";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function Index() {
  const {
    isReady,
    query: { code },
  } = useRouter();

  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in/kakao`;

  const { data } = useQuery({
    queryKey: [REACT_QUERY.OAUTH.KAKAO],
    queryFn: () =>
      ClientWithoutAuth.post(url, {
        redirection_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
        code: `${process.env.NEXT_PUBLIC_ENV === "POSTMAN" ? process.env.NEXT_PUBLIC_KAKAO_FAKE_RESPONSE_CODE : code}`,
      }),
    enabled: !!isReady,
  });

  return <>소셜 로그인 진행중입니다.</>;
}

Index.getLayout = BasicLayout;
