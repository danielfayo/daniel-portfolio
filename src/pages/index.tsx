import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <Layout>
      <main className={`bg-yellow-500 min-h-screen px-4 pb-4`}>
        <div className="max-w-5xl mx-auto space-y-4">
          <Hero />
          <About />
          <Projects/>
        </div>
      </main>
    </Layout>
  );
}
