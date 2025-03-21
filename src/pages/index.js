import HeloSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import DemoSection from "@/components/DemoSection";
import SignageBrands from "@/components/SignageBrands";
import HowWeWork from "@/components/HowWeWork";
import MagicHappens from "@/components/MagicHappens";
import DownloadBrochure from "@/components/DownloadBrochure";


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
