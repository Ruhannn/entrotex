import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Slides from "./Slides";

export default function ProductHero() {
  return (
    <Canvas
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      style={{ height: "100vh", userSelect: "none" }}>
      <Suspense  fallback={null}>
        <ScrollControls maxSpeed={10} horizontal pages={3} distance={1}>
          <Scroll>
            <Slides />
          </Scroll>
          <Scroll html>
            <div className="flex">
              <h1 className="absolute top-[20vh] left-[25vw] text-[20vw] font-semibold leading-4 text-red-500 ">
                ready
              </h1>
              <h1 className="absolute top-[20vh] left-[85vw] text-[20vw] font-semibold leading-4 text-red-500 ">
                to
              </h1>
              <h1 className="absolute top-[20vh] left-[125vw] text-[20vw] font-semibold leading-4 text-red-500 ">
                explore
              </h1>
              <h1 className="absolute top-[20vh] left-[220vw] text-[20vw] font-semibold leading-4 text-red-500 ">
                Entrotex
              </h1>
            </div>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  );
}
