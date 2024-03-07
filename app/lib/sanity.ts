import { createClient } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  apiVersion: "2024-03-06",
  dataset: "production",
  projectId: "a9f1y2g2",
  useCdn: false,
});

export const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
