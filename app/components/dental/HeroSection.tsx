"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from "../../scss/HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section
      id="home"
      className={styles.hero}
    >
      {/* Background image */}
      <div className={styles.background}>
        <Image
          src="/assets/hero-dental.jpg"
          alt="Happy dental patient"
          fill
          priority
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.grid}>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.welcomeText}>
              Welcome to Amjin Dental
            </p>

            <h1 className={styles.title}>
              Your Smile Is Our
              <span> Top Priority</span>
            </h1>

            <p className={styles.description}>
              We provide the highest quality dental care with state-of-the-art
              technology and a compassionate team dedicated to your comfort.
            </p>

            <div className={styles.actions}>
              <a
                href="#appointment"
                className={`gold-gradient ${styles.btnPrimary}`}
              >
                <ArrowRight className="w-4 h-4" />
                Book Appointment
              </a>

              <a
                href="#services"
                className={styles.btnOutline}
              >
                Our Services
              </a>
            </div>
          </motion.div>

          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            id="appointment"
            className={styles.appointmentCard}
          >
            <h3 className={styles.formTitle}>
              Book an
            </h3>
            <h3 className={styles.formSubtitle}>
              Appointment
            </h3>

            <form
              className={styles.form}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Your Name"
                className={styles.input}
              />

              <input
                type="email"
                placeholder="Email Address"
                className={styles.input}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className={styles.input}
              />

              <select className={styles.input}>
                <option>Choose Doctor</option>
                <option>Jordan Peele</option>
                <option>Norton Berry</option>
                <option>Clare Smyth</option>
                <option>Jamie Oliver</option>
              </select>

              <button
                type="submit"
                className={`gold-gradient ${styles.submitBtn}`}
              >
                Book An Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
