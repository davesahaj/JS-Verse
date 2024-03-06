import { article } from "@/app/lib/interface";
import { sanityClient, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `
    *[_type=='blog' && slug.current=='${slug}']{
        "currentSlug":slug.current,
          title,
          content,
          titleImage
      }[0]
      `;

  const data: article = await sanityClient.fetch(query);
  return data;
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Sahaj Dave Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl ">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="blog cover image"
        priority
        className="rounded-lg mt-8 border mx-auto"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-headings:underline prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
