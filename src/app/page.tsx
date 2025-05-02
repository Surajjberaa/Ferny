'use client'
import Home from "./pages/home/Home";
import ReactLenis from "lenis/react";


export default function Root() {

  //Lenis
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // });
  

  return (
    <>
    <ReactLenis root>
      <Home />
    </ReactLenis>
    </>
  );
}
