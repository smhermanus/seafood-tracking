/* eslint-disable react/no-unescaped-entities */
import loginImage from "../../../assets/login-rightside-bg-image.jpg";
import logo from "../../../assets/logo.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";


export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex h-full w-full overflow-hidden bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <span className="flex justify-center">
            <Image src={logo} alt="" width={130} height={130} priority />
          </span>
          <LoginForm />
          <div className="text-center">
            <Link href={"/signup"}>Don't have an Acc? Go to Register</Link>
          </div>
          
        </div>
        <Image
          src={loginImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
