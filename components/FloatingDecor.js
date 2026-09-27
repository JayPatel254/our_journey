"use client";

import styles from "./FloatingDecor.module.css";

const ITEMS = [
  { icon: "🧸", left: "6%", size: 34, duration: 22, delay: 0 },
  { icon: "💌", left: "88%", size: 26, duration: 26, delay: 2 },
  { icon: "🩷", left: "20%", size: 20, duration: 18, delay: 4 },
  { icon: "🧸", left: "72%", size: 28, duration: 24, delay: 1 },
  { icon: "✨", left: "40%", size: 18, duration: 20, delay: 6 },
  { icon: "🩷", left: "58%", size: 22, duration: 28, delay: 3 },
];

export default function FloatingDecor() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {ITEMS.map((item, i) => (
        <span
          key={i}
          className={styles.item}
          style={{
            left: item.left,
            fontSize: item.size,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.icon}
        </span>
      ))}
    </div>
  );
}
