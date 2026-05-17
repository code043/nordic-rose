"use client";
import { articles as data } from "@/data/articles";
import Image from "next/image";
import { useState } from "react";

export default function Articles() {
  const [articles] = useState(data);
  return (
    <div className="flex justify-center">
      <ul className="flex flex-col px-10">
        {articles.map((art) => {
          return (
            <li key={art.id} className="flex flex-col ">
              <Image src={art.image} width={300} height={200} alt="image" />
              <p className="text-center px-3 py-4">{art.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
