"use client";
import Link from "next/link";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center h-full">
      <div>
        <p className="font-sans text-6xl">Welcome Back</p>
        <Link
          key="dashboard"
          href="/product/SR0160AQ"
          className="group p-3 w-full text-center mt-5 bg-blue-500 text-white rounded-md flex justify-center gap-2 items-center"
        >
          <span>Go to product page</span>
          <ArrowRightIcon className="w-5 transition-transform duration-300 transform group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  );
}
