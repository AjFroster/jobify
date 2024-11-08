import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import LandingImage from "@/assets/main.svg";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={logo} alt="logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h6 className="capitalize text-4xl md:text-7xl font-bold">
            Make Job Applications Easy
          </h6>
          <p className="leading-loose max-w-md mt-4 ">
            Between tweaking your resume for the 47th time, crafting the
            “perfect” cover letter, and hitting refresh on your inbox every five
            minutes, job hunting can feel like a full-time job on its own. Let
            us help! Our app makes tracking job applications a breeze—no more
            lost tabs, forgotten follow-ups, or wondering if you applied to the
            same company twice (we’ve all been there). Stay organized, stay
            motivated, and maybe even laugh a little on your way to landing that
            dream gig. Because finding a job shouldn’t be harder than the job
            itself.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImage} alt="landing" className="hidden lg:block " />
      </section>
    </main>
  );
}
