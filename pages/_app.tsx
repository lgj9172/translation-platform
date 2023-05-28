import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnReconnect: false, retry: false },
  },
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
        fontFamily: "'Spoqa Han Sans', 'Spoqa Han Sans JP', sans-serif",
        fontFamilyMonospace: "Monaco, Courier, monospace",
        headings: { fontFamily: "'Spoqa Han Sans', 'Spoqa Han Sans JP', sans-serif" },
      }}
    >
      <Head>
        <title>Fluence</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ModalsProvider>
          <NotificationsProvider position="top-right" limit={2}>
            {getLayout(<Component {...pageProps} />)}
          </NotificationsProvider>
        </ModalsProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
}
