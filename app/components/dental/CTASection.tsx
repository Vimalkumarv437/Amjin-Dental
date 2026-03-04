"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from "../../scss/CTASection.module.scss";

const CTASection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.contentWrapper}
        >
          <div>
            <h2 className={styles.title}>
              We Can Help You Keep Your Smile <span>In Tip-Top Shape</span>
            </h2>
            <p className={styles.desc}>We're putting your comfort first</p>
          </div>
          <a
            href="#appointment"
            className={styles.ctaBtn}
          >
            <ArrowRight className="w-4 h-4" />
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
