import { ReactElement } from "react";

export default function BasicLayout(page: ReactElement) {
  return <div className="container mx-auto">{page}</div>;
}
