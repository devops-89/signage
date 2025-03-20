import HeloSection from "@/components/HeroSection";
import { Geist, Geist_Mono } from "next/font/google";
import ProjectsSection from "@/components/ProjectsSection";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div >
     <HeloSection/>
     <ProjectsSection/>
    </div>
  );
}
