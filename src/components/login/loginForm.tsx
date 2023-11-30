import * as React from "react";

export interface ILoginFormProps {}

export default function LoginForm(props: ILoginFormProps) {
  return (
    <form className="py-8">
      <div className=" text-md mb-5 flex flex-col gap-1 ">
        <label className="font-medium text-slate-300" htmlFor="">
          Email
        </label>
        <input
          type="text"
          className="rounded-md border-2 border-slate-200  px-4 py-2 font-normal text-slate-900 outline-none focus:border-slate-300"
        />
      </div>
      <div className=" text-md mb-6 flex flex-col gap-1  ">
        <label className="font-medium text-slate-300" htmlFor="">
          Password
        </label>
        <input
          type="text"
          className=" rounded-md border-2  border-slate-200 px-4 py-2 font-normal text-slate-900 outline-none focus:border-slate-300"
        />
      </div>
      <button className="mt-4 w-full rounded-full bg-indigo-700 py-2 font-medium text-white">
        Submit
      </button>
    </form>
  );
}
