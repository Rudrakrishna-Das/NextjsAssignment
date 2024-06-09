"use client";
import Advantages from "@/components/Advantages";
import Customize from "@/components/Customize";
import FAQ from "@/components/Faq";
import Features from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Slide from "@/components/Slide";
import Testimonials from "@/components/Testemonials";
import { useState } from "react";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebarHandler = () => {
    setSidebarOpen((prevState) => !prevState);
  };
  return (
    <>
      <header>
        <Navigation sidebarOpen={openSidebarHandler} />
        {sidebarOpen && <Sidebar />}
      </header>
      <main className="p-9">
        <Hero />
        <Features />
        <Advantages />
        <Customize />
        <Testimonials />
        <FAQ />
        <Slide />
        <Footer />
      </main>
    </>
  );
};

export default Home;
