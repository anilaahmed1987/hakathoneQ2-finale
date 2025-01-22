// import React from 'react'
// import Image from 'next/image'



// const FoodCategory = () => {
//   // Items array containing food details
//   const items = [
//     { id: 1, img: "/fc1.png", label: "Save 50% on Fast Food" },
//     { id: 2, img: "/fc2.png", label: "Delicious Burgers" },
//     { id: 3, img: "/fc3.png", label: "Healthy Salads" },
//     { id: 4, img: "/fc4.png", label: "Desserts" },
//   ];

//   return (
//     <section className="bg-black text-white py-16 px-6">
//       <div className="container mx-auto text-center">
//         <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes">
//           Food Category
//         </h1>
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 mt-5">
//           <span className="text-[#FF9F0D]">Ch</span>oose Food Item
//         </h2>

//         {/* Grid of food items */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {items.map((item) => (
//             <div key={item.id} className="relative">
//               {/* Image of the food item */}
//               <Image
//                 src={item.img}
//                 alt={item.label}
//                 width={500}
//                 height={500}
//                 className="object-cover rounded-lg w-full h-full"
//               />
//               {/* Label or Description for the food item */}
//               <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-xl font-semibold p-4 rounded-b-lg">
//                 {item.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FoodCategory




"use client"
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React ,{ useEffect, useState } from "react";
import { Food } from "../../types/food";
import { client } from "@/sanity/lib/client";
import { allfood } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
const FoodCategory =()=> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [food,setfood]=useState<Food[]>([])
  useEffect(()=>{
    async function fetchfood() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const fetchedfood: Food [] = await client.fetch(allfood)
      setfood(fetchedfood)
      

    }
    fetchfood()

  },[])

  return(
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">our latest menu </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid cols-3 lg:grid-cols-4 gap-6">

      {food.map((food) => (
      <div key={food._id}
      className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
      >
       
       
       {/* <Link href={`/food/${food.slug.current}`}> */}

       <Link href={`/food/${food?.slug?.current}`}>

       
    
      
        {food.image &&(
        
          <Image
          src={urlFor(food.image).url()}
          alt={food.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover rounded-md"
          />
        )}
        <h2 className="text-lg font-semibold mt-4">{food.name}</h2>
        <p className="text-gray-500 mt-2">
          {food.price ? `$${food.price}` : "price not available"}
        </p>
        </Link>
        

      </div>
      ))}

    </div>
    </div>
  );
};
export default FoodCategory
 








