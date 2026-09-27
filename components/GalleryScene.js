"use client";

import { motion } from "framer-motion";
import PHOTOS from "./photos";
import styles from "./GalleryScene.module.css";

export default function GalleryScene() {
  return (
    <motion.section
      className={styles.wrap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Our first year, in pictures
      </motion.h2>
      <p className={styles.sub}>Happy one year, love. Here&rsquo;s to many more. 🩷</p>

      <div className={styles.masonry}>
        {PHOTOS.map((photo, i) => (
          <motion.figure
            key={i}
            className={styles.card}
            style={{
              background: photo.gradient,
              transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
          >
            {photo.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo.src} alt={photo.caption} className={styles.img} />
            ) : null}
            <span className={styles.sticker} aria-hidden="true">
              {photo.sticker}
            </span>
            <figcaption className={styles.caption}>{photo.caption}</figcaption>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}
