import { groq } from "next-sanity";

export const allfood =groq`*[_type=="food"]`;
export const four = groq`*[_type=="food"][0..3]`

export const food = groq`*[_type == "food"]{
    _id,
    name,
    slug
  }`;
  