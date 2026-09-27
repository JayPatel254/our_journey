"use client";

import { useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import styles from "./QuestionScene.module.css";

const DODGE_LINES = [
  "Nope 🙈",
  "Try again?",
  "Almost had it",
  "So close!",
  "Nice try 😏",
  "Not today",
  "Keep trying",
];

export default function QuestionScene({ onYes }) {
  const [noPos, setNoPos] = useState(null);
  const [dodgeCount, setDodgeCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const noRef = useRef(null);

  const dodge = useCallback(() => {
    const btn = noRef.current;
    const w = btn ? btn.offsetWidth : 120;
    const h = btn ? btn.offsetHeight : 52;
    const availableX = Math.max(0, window.innerWidth - w);
    const availableY = Math.max(0, window.innerHeight - h);
    const marginX = Math.min(24, availableX / 2);
    const marginY = Math.min(24, availableY / 2);
    const left = marginX + Math.random() * (availableX - marginX * 2);
    const top = marginY + Math.random() * (availableY - marginY * 2);
    setNoPos({ top, left });
    setDodgeCount((c) => c + 1);
  }, []);

  const fireConfetti = () => {
    const colors = ["#c9184a", "#ffb8cf", "#e3a857", "#fff6ef"];
    confetti({
      particleCount: 90,
      spread: 75,
      startVelocity: 38,
      origin: { y: 0.6 },
      colors,
    });
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.7 },
      colors,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.7 },
      colors,
    });
  };

  const handleYes = () => {
    fireConfetti();
    setAnswered(true);
  };

  const label = DODGE_LINES[Math.min(dodgeCount, DODGE_LINES.length - 1)];
  const noButton = (
    <motion.button
      ref={noRef}
      className={styles.no}
      style={
        noPos
          ? { position: "fixed", top: noPos.top, left: noPos.left }
          : undefined
      }
      onMouseEnter={dodge}
      onTouchStart={(e) => {
        e.preventDefault();
        dodge();
      }}
      onFocus={dodge}
      animate={noPos ? { top: noPos.top, left: noPos.left } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      {label}
    </motion.button>
  );

  return (
    <motion.section
      className={styles.wrap}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.4 } }}
    >
      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div
            key="ask"
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.question}>Do you love me?</h2>
            <p className={styles.hint}>
              (there is only one correct answer here)
            </p>

            <div className={styles.buttonRow}>
              <motion.button
                className={styles.yes}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={handleYes}
              >
                Yes 💗
              </motion.button>

              {!noPos && noButton}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="celebrate"
            className={styles.card}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 180 }}
          >
            <motion.div
              className={styles.bigHeart}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.3, 1] }}
              transition={{ duration: 0.6 }}
            >
              💖
            </motion.div>
            <h2 className={styles.question}>
              I knew you were going to say yes.
            </h2>
            <p className={styles.hint}>
              (the &ldquo;no&rdquo; button never stood a chance)
            </p>
            <motion.button
              className={styles.yes}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onYes}
            >
              See our memories 🖼️
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      {noPos && typeof document !== "undefined"
        ? createPortal(noButton, document.body)
        : null}
    </motion.section>
  );
}
