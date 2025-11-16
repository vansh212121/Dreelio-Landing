import AboutApp from "@/components/sections/AboutApp";
import Blog from "@/components/sections/Blog";
import Community from "@/components/sections/Community";
import CTA from "@/components/sections/CTA";
import FeaturesGrid from "@/components/sections/Features";
import FinancialManagement from "@/components/sections/FinancialManagement";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import PricingSection from "@/components/sections/Pricing";
import ProjectManagement from "@/components/sections/ProjectManagement";
import TestimonialsCarousel from "@/components/sections/Testimonials";
import Ticker from "@/components/sections/Ticker";
import Ticker2 from "@/components/sections/Ticker2";


export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Hero />
                <Ticker />
                <AboutApp />
                <ProjectManagement />
                <FinancialManagement />
                <FeaturesGrid />
                <TestimonialsCarousel />
                <PricingSection />
                <Ticker2 />
                <Blog />
                <Community />
                <CTA/>
                <Footer/>
            </main>
        </>
    );
}