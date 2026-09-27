"use client";

import { motion } from "framer-motion";
import styles from "./IntroScene.module.css";

export default function IntroScene({ onContinue }) {
  return (
    <motion.section
      className={styles.wrap}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
    >
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        A year down, forever to go
      </motion.p>

      <motion.h1
        className={styles.headline}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        One year of <em>us</em>.
      </motion.h1>

      <motion.p
        className={styles.sub}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        I made you a little something. It won&rsquo;t take long &mdash;
        promise.
      </motion.p>

      <motion.button
        className={styles.cta}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onContinue}
      >
        Open it 🎀
      </motion.button>
    </motion.section>
  );
}
