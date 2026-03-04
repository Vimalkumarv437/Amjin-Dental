"use client";
import { motion } from "framer-motion";
import { UserCheck, ClipboardList, Activity, ShieldCheck } from "lucide-react";
import styles from "../../scss/ProcessSection.module.scss";

const steps = [
  { num: "01", icon: UserCheck, title: "Connect with Expert", desc: "Connect with expert dentists for personalized care, advanced treatments, routine check-ups." },
  { num: "02", icon: ClipboardList, title: "Initial Consultation", desc: "Schedule your consultation to discuss dental concerns and personalized treatment plans today." },
  { num: "03", icon: Activity, title: "Dental Treatment", desc: "Expert dental treatment to restore, protect, and enhance your smile and health." },
  { num: "04", icon: ShieldCheck, title: "Issuing a Guarantee", desc: "We issue a clear guarantee to ensure confidence in your dental treatment results." },
];

const ProcessSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.subtitle}>Our Dental Care Process</p>
          <h2 className={styles.title}>
            Committed To Exceptional <br className="hidden md:block" />
            <span>Patient Centered</span> Care
          </h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={styles.card}
            >
              <span className={styles.stepNum}>
                {step.num}
              </span>
              <div className={styles.iconWrapper}>
                <step.icon className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
