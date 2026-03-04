"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import styles from "../../scss/TestimonialsSection.module.scss";

const testimonials = [
  {
    name: "Ariana Green",
    role: "Lead Supervisor",
    img: "/assets/testimonial-1.jpg",
    text: "I recently finished my Invisalign treatment and the transformation is amazing. The process was easy, and the team guided me every step of the way. I can't stop smiling!",
  },
  {
    name: "Parsons William",
    role: "General Dentist",
    img: "/assets/testimonial-2.jpg",
    text: "My experience at the dentist was excellent! The team was welcoming and professional. I am thrilled with how my smile looks now and would definitely recommend their services.",
  },
  {
    name: "Victoria Porter",
    role: "Dentist Expert",
    img: "/assets/testimonial-3.jpg",
    text: "My dental visit was fantastic! The staff was friendly and made me feel comfortable. My teeth have never looked better—I am so happy with the results!",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={`section-subtitle ${styles.subtitle}`}>Testimonials</p>
          <h2 className="section-title">
            What Our <span>Patients Say</span>
          </h2>
        </div>

        <div className={styles.carousel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className={styles.card}
            >
              <Quote className={styles.quoteIcon} />

              <p className={styles.text}>
                "{testimonials[current].text}"
              </p>

              <img
                src={testimonials[current].img}
                alt={testimonials[current].name}
                className={styles.authorImg}
              />

              <h4 className={styles.authorName}>
                {testimonials[current].name}
              </h4>
              <p className={styles.authorRole}>
                {testimonials[current].role}
              </p>

              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={styles.star}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className={`${styles.navBtn} ${styles.prevBtn}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className={`${styles.navBtn} ${styles.nextBtn}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`${styles.dot} ${i === current ? styles.active : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
