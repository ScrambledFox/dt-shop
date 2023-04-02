import Link from "next/link";
import React from "react";

import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";

import ArticleOne from "@/data/article1.json";
import ArticleTwo from "@/data/article2.json";
import ArticleThree from "@/data/article3.json";
import ArticleFour from "@/data/article4.json";

export default function Footer() {
  return (
    <div className=" bg-zinc-900 text-white min-h-fit">
      <div className="flex gap-32 justify-center pt-6">
        <div className="flex gap-3 w-48 flex-col text-center">
          <h3 className="text-white text-xl">Products</h3>
          <Link className="hover:text-zinc-100" href={"/transformation"}>
            Digital Twin Transformation
          </Link>
          <Link className="hover:text-zinc-100" href={"/api"}>
            ShapeShift API
          </Link>
        </div>
        <div className="flex gap-3 w-48 flex-col text-center">
          <h3 className="text-white text-xl">Company</h3>
          <Link className="hover:text-zinc-100" href={"/team"}>
            Our team
          </Link>
          <Link className="hover:text-zinc-100" href={"/culture"}>
            Portfolio
          </Link>
          <Link className="hover:text-zinc-100" href={"/privacypolicy"}>
            Privacy Policy
          </Link>
          <Link className="hover:text-zinc-100" href={"/userpolicy"}>
            User Policy
          </Link>
        </div>
        <div className="flex gap-3 w-48 flex-col text-center">
          <h3 className="text-white text-xl">Latest posts</h3>
          <Link className="hover:text-zinc-100" href={"/article1"}>
            {ArticleOne.title}
          </Link>
          <Link className="hover:text-zinc-100" href={"/article2"}>
            {ArticleTwo.title}
          </Link>
          <Link className="hover:text-zinc-100" href={"/article3"}>
            {ArticleThree.title}
          </Link>
          <Link className="hover:text-zinc-100" href={"/article4"}>
            {ArticleFour.title}
          </Link>
        </div>
      </div>
      <div id="socials" className="flex gap-6 justify-center mt-6">
        <span className="border-b-2 flex-grow" />
        <BsLinkedin className="cursor-pointer" color="lightgray" />
        <BsTwitter className="cursor-pointer" color="lightgray" />
        <BsFacebook className="cursor-pointer" color="lightgray" />
        <span className="border-b-2 flex-grow" />
      </div>
      <div className="text-center mt-6 pb-6">
        <p>ShapeShift has been founded with ❤ for a better future</p>
        <p>© Copyright Shapeshift B.V. 2023</p>
      </div>
    </div>
  );
}
