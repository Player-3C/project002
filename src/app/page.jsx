"use client";
import { useEffect, useState } from "react";
import { fetchContact } from "../lib/api";

export default function Home() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetchContact().then((data) => setContact(data));
  }, []);

  if (!contact) return <p>Loading...</p>;


  return (
    <main>
      <div className="bg-red-700">
        <div className="MyContainer">
          <div className="flex justify-between items-center max-lg:flex-col py-18 max-lg:py-12">
            <div className="grid gap-3">
              <h1 className="font-semibold text-6xl text-white max-lg:text-center max-lg:text-4xl">
                {contact.heading}
              </h1>
              <p className="font-medium text-2xl text-white max-lg:text-center max-lg:text-[20px]">
                {contact.subheading}
              </p>
            </div>
            <button className="px-8 py-2 font-medium text-red-700 bg-white h-12.5 max-lg:mt-5">
              {contact.btnText}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
