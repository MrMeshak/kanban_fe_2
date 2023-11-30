import Link from "next/link";
import * as React from "react";

export interface ILoginSignupLinkProps {}

export default function LoginSignupLink(props: ILoginSignupLinkProps) {
  return (
    <div className="flex justify-center">
      <p className="text-sm font-light">
        Don&apos;t have an account?
        <Link className=" pl-2 font-semibold hover:underline " href={"/signup"}>
          Sign Up
        </Link>
      </p>
    </div>
  );
}
