"use client";
import { useEffect, useState } from "react";
import { fetchContact } from "../lib/api";

export default function Home() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetchContact().then((data) => setContact(data));
  }, []);

  if (!contact)
    return (
      <p className="text-center mt-20 text-xl text-gray-400">Loading...</p>
    );

  return (
    <main>
      <section className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="MyContainer max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Heading */}
            <h1 className="text-white font-extrabold text-5xl sm:text-6xl leading-tight">
              {contact.heading}
            </h1>

            {/* Subheading */}
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">
              {contact.subheading}
            </p>

            {/* Button */}
            <button className="mt-6 px-10 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300">
              {contact.btnText}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
