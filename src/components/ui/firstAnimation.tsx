"use client";

import { motion } from "motion/react";

export default function FirstAnimation() {
    return (
        <motion.ul
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }} />
    )
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}