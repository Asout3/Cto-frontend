"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to CTO Frontend
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            A modern Next.js 15 application built with TypeScript, Tailwind CSS,
            and cutting-edge technologies.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>

            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
          {[
            {
              title: "Fast",
              description: "Built on Next.js 15 for optimal performance",
            },
            {
              title: "Secure",
              description: "Enterprise-grade security with best practices",
            },
            {
              title: "Scalable",
              description: "Architecture designed for growth",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
