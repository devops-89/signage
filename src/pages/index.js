import HeloSection from "@/components/HeroSection";
import { Geist, Geist_Mono } from "next/font/google";
import ProjectsSection from "@/components/ProjectsSection";
import DemoSection from "@/components/DemoSection";
import SignageBrands from "@/components/SignageBrands";
import HowWeWork from "@/components/HowWeWork";
import MagicHappens from "@/components/MagicHappens";
import DownloadBrochure from "@/components/DownloadBrochure";
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
     <DemoSection/>
     <SignageBrands/>
     <HowWeWork/>
     <MagicHappens/>
     <DownloadBrochure/>
    </div>
  );
}
