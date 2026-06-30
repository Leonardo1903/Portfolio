import Image from "next/image";
import Link from "next/link";

export const mdxComponents = {
  img: (props: any) => (
    <Image
      {...props}
      width={1200}
      height={700}
      alt={props.alt}
      className="my-8 rounded-2xl"
    />
  ),

  a: (props: any) => (
    <Link
      {...props}
      className="text-orange-400 underline underline-offset-4"
    />
  ),
};