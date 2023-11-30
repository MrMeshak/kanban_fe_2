import * as React from "react";
import Logo from "../utils/logo/logo";

export interface ILoginHeaderProps {}

export default function LoginHeader(props: ILoginHeaderProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <Logo className="h-20 w-20" fill="#4338ca" />
      <h2 className="py-4 text-3xl  font-bold">Kanban</h2>
      <h3 className="">Login to your account</h3>
    </div>
  );
}
