/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";

export default function Logo() {
  return (
    <div className="center-logo">
      <Link href={"/"} className="flex gap-1">
        <img
          src="/images/logo.webp"
          alt="Alaska Skin Cancer Speciality Group"
          className="custom-logo"
        />
        <span className="text-primary font-bold mt-1"></span>
      </Link>
    </div>
  );
}
