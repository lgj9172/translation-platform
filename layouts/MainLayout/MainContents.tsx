import { ReactElement } from "react";

interface MainContentsProps {
  page: ReactElement;
}

export default function MainContents({ page }: MainContentsProps) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">{page}</div>
    </div>
  );
}
