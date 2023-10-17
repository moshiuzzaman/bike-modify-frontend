import Layout from "@/components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Hero from "@/components/Home/Hero";
import Service from "@/components/Home/Service";
import About from "@/components/Home/About";
import Prices from "@/components/Home/Pricing";
import Review from "@/components/Home/Review";
import LatestWork from "@/components/Home/LatestWork";
import Team from "@/components/Home/Team";
import Sponsor from "@/components/Home/Sponsor";



export default function Home() {
  return (
    <>
      <SeoHead title='Car modify' />
      <Layout>
         <Hero />
         <Service/>
         <About/>
         <Prices/>
         <Review/>
         <Team/>
        <Sponsor/>
         <LatestWork/>
        
      </Layout>
    </>
  );
}
