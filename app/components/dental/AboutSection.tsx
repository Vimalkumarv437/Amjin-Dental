"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Award, Clock, Zap, HeartPulse } from "lucide-react";
import styles from "../../scss/AboutSection.module.scss";

const features = [
  { icon: Clock, text: "Night and weekend appointment" },
  { icon: Zap, text: "Routine & emergency services" },
  { icon: HeartPulse, text: "Short wait time & luxury amenities" },
  { icon: Award, text: "Decades of experience science-based care" },
];

const AboutSection = () => {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.imageWrapper}
          >
            <Image
              src="/assets/working-process.jpg"
              alt="Modern dental clinic"
              width={600}
              height={500}
              className={styles.mainImage}
              priority
            />

            <div className={styles.expBadge}>
              <p className={styles.expValue}>
                25+
              </p>
              <p className={styles.expLabel}>
                Years of<br />Experience
              </p>
            </div>

            <div className={styles.awardBadge}>
              <p className={styles.awardText}>
                <Award className="w-4 h-4" />
                Aesthetic Dentistry Awards 2021
              </p>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={`section-subtitle ${styles.subtitle}`}>Why Choose Us</p>
            <h2 className={`section-title ${styles.title}`}>
              We're Here To Keep Your{" "}
              <span>Smile Healthy</span> & Bright
            </h2>
            <p className={styles.desc}>
              Our clinic was created to make your smile beautiful, healthy and
              snow-white. We offer a wide range of dental treatment and dental
              restoration services.
            </p>
            <p className={styles.desc}>
              We have gathered only qualified specialists with extensive
              experience in the dental field.
            </p>

            <div className={styles.featuresGrid}>
              {features.map((f) => (
                <div key={f.text} className={styles.feature}>
                  <div className={styles.featureIconWrapper}>
                    <f.icon className={styles.featureIcon} />
                  </div>
                  <p className={styles.featureText}>
                    {f.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className={styles.ctaBtn}
            >
              <Check className="w-4 h-4" />
              Discover More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
