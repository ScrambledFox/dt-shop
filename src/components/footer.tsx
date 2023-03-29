import Link from "next/link";
import React from "react";

import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-slate-700 text-slate-300 min-h-fit">
      <div className=" flex gap-32 justify-center pt-6">
        <div className="flex flex-col text-center">
          <h3 className="text-white text-xl">Products</h3>
          <Link href={"/transformation"}>Digital Twin Transformation</Link>
          <Link href={"/api"}>ShapeShift API</Link>
        </div>
        <div className="flex flex-col text-center">
          <h3 className="text-white text-xl">Company</h3>
          <Link href={"/team"}>Our team</Link>
          <Link href={"/culture"}>Portfolio</Link>
          <Link href={"/privacypolicy"}>Privacy Policy</Link>
          <Link href={"/userpolicy"}>User Policy</Link>
        </div>
        <div className="flex flex-col text-center">
          <h3 className="text-white text-xl">Latest posts</h3>
          <Link href={""}>Post 1</Link>
          <Link href={""}>Post 2</Link>
          <Link href={""}>Post 3</Link>
          <Link href={""}>Post 4</Link>
        </div>
      </div>
      <div id="socials" className="flex gap-6 justify-center mt-6">
        <span className="border-b-2 flex-grow" />
        <BsLinkedin color="lightgray" />
        <BsTwitter color="lightgray" />
        <BsFacebook color="lightgray" />
        <span className="border-b-2 flex-grow" />
      </div>
      <div className="text-center mt-6 pb-6">
        <p>ShapeShift has been founded with ❤ for a better future</p>
        <p>© Copyright Shapeshift B.V. 2023</p>
      </div>
    </div>
  );
}
