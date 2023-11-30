import LoginForm from "@/components/login/loginForm";
import LoginHeader from "@/components/login/loginHeader";
import LoginSignupLink from "@/components/login/loginSignupLink";
import * as React from "react";

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="rounded-xl border-2 border-lines bg-white p-8">
        <LoginHeader />
        <LoginForm />
        <LoginSignupLink />
      </div>
    </div>
  );
}
