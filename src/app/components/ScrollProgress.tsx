'use client'

import React from 'react'
import { motion, useScroll } from "motion/react"

function ScrollProgress() {

    const { scrollYProgress } = useScroll()
  return (
    <motion.div
    id="scroll-indicator"
    style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        originX: 0,
        backgroundColor: "#c9c5ba",
    }}
/>
  )
}

export default ScrollProgress