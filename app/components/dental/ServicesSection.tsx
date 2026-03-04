"use client";
import { motion } from "framer-motion";
import { Stethoscope, Shield, Sparkles, Settings, Smile, Heart } from "lucide-react";
import styles from "../../scss/ServicesSection.module.scss";

const services = [
  { icon: Stethoscope, title: "General Dentistry", desc: "Comprehensive dental care for healthy, confident smiles." },
  { icon: Settings, title: "Restorative Dentistry", desc: "Repairing smiles with expert, lasting dental solutions." },
  { icon: Shield, title: "Cavity Protection", desc: "Preventing cavities with strong, proactive dental care." },
  { icon: Heart, title: "Dental Implants", desc: "Permanent tooth replacement for confident, natural smiles." },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Enhancing smiles with artistic, personalized dental care." },
  { icon: Smile, title: "Teeth Whitening", desc: "Brighten your smile with professional whitening treatments." },
];

const ServicesSection = () => {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={`section-subtitle ${styles.subtitle}`}>Our Services</p>
          <h2 className={`section-title ${styles.title}`}>
            Our Practice Areas <br className="hidden md:block" />
            <span>And Expertise</span>
          </h2>
          <p className={styles.description}>
            We pride ourselves on providing highly qualified and experienced medical professionals. Our staffing solutions are catered to your specific needs.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                <service.icon />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.footer}>
          <a href="#services" className={styles.exploreLink}>
            Latest solutions, and decades of experience. Explore All Services →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
