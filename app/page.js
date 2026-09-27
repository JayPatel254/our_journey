"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroScene from "../components/IntroScene";
import QuestionScene from "../components/QuestionScene";
import GalleryScene from "../components/GalleryScene";
import FloatingDecor from "../components/FloatingDecor";
import styles from "./page.module.css";

export default function Home() {
  const [scene, setScene] = useState("intro");

  return (
    <main className={styles.stage}>
      <FloatingDecor />
      <AnimatePresence mode="wait">
        {scene === "intro" && (
          <IntroScene key="intro" onContinue={() => setScene("question")} />
        )}
        {scene === "question" && (
          <QuestionScene key="question" onYes={() => setScene("gallery")} />
        )}
        {scene === "gallery" && <GalleryScene key="gallery" />}
      </AnimatePresence>
    </main>
  );
}
