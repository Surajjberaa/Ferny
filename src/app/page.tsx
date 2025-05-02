'use client'
import Image from "next/image";
import Landing from "./pages/home/Lanfing/page";
import Home from "./pages/home/page";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import ReactLenis, { useLenis } from "lenis/react";


export default function Root() {

  //Lenis
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  

  return (
    <>
    <ReactLenis root>
      <Home />
    </ReactLenis>
    </>
  );
}
