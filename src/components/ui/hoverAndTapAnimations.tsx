"use client";

import { motion } from "motion/react";

export default function HoverAndTapAnimations() {
    return (
        <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            onHoverStart={() => {
                console.log('hover started')
            }}
            style={box}
        />
    )
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
}