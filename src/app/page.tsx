"use client";
import Header from "@/components/Layouts/Header";
import { Vortex } from "@/components/ui/vortex";
import { FlipWords } from "@/components/ui/flip-words";
import SparklesText from "@/components/magicui/sparkles-text";

export default function Home() {
  const words = ["Student", "Developer", "Innovator", "Creator"];

  return (
    <>
      <Header />
      <div className="w-full mx-auto rounded-md mt-[-6rem] min-h-[100vh] overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full min-h-screen"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Microsoft Learn
            <span className="bg-gradient-to-l from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              <FlipWords words={words} />{" "}
            </span>
            <br />
            Ambassadors
          </h2>
          <span className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          <SparklesText className="text-[0.8rem] md:text-[1.25rem] text-blue-800 text-semibold" text="Meerut Institute of Engineering and Technology" />
          </span>
          
        </Vortex>
      </div>
    </>
  );
}
