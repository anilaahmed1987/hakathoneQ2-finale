












// import { groq } from 'next-sanity';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';

// interface FoodPageProps {
//   params: {
//     slug: string;
//   };
// }

// export default async function FoodPage({ params }: FoodPageProps) {
//   const { slug } = params;

//   // Fetch the food item from Sanity
//   const query = groq`*[_type == "food" && slug.current == $slug][0]{
//     name,
//     description,
//     price,
//     image
//   }`;
//   const food = await client.fetch(query, { slug });

//   if (!food) {
//     return <div>Food item not found.</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         <div className="aspect-square">
//           {food.image && (
//             <Image
//               src={urlFor(food.image).url()}
//               alt={food.name}
//               width={500}
//               height={500}
//               className="rounded-lg shadow-md"
//             />
//           )}
//         </div>
//         <div>
//           <h1 className="text-4xl font-bold mb-4">{food.name}</h1>
//           <p className="text-lg text-gray-700 mb-4">{food.description}</p>
//           <p className="text-2xl font-semibold">${food.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// }












// app/food/[slug]/page.tsx
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

interface FoodPageProps {
  params: { slug: string };
}

const foodQuery = groq`*[_type == "food" && slug.current == $slug][0]{
  _id,
  name,
  description,
  price,
  image
}`;

export default async function FoodPage({ params }: FoodPageProps) {
  const { slug } = params;
  const food = await client.fetch(foodQuery, { slug });

  if (!food) {
    // Handle case where food item is not found
    return <div>Food item not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {food.image && (
            <Image
              src={food.image}
              alt={food.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div>
          <h1 className="text-4xl font-bold">{food.name}</h1>
          <p className="mt-4 text-gray-700">{food.description}</p>
          <p className="mt-2 text-lg font-semibold">${food.price}</p>
        </div>
      </div>
    </div>
  );
}
