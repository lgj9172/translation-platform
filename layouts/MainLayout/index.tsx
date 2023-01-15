import { ReactElement } from "react";
import MainContents from "./MainContents";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

export default function MainLayout(page: ReactElement) {
  return (
    <>
      <MainHeader />
      <MainContents page={page} />
      <MainFooter />
    </>
  );
}
