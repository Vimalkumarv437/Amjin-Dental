"use client";
import { motion } from "framer-motion";
import { Users, ThumbsUp, Smile, Trophy } from "lucide-react";
import styles from "../../scss/StatsSection.module.scss";

const stats = [
  { icon: Users, value: "50+", label: "Highly Specialized Doctors and Nurses" },
  { icon: ThumbsUp, value: "98%", label: "Customer Satisfaction Is Our Success" },
  { icon: Smile, value: "95%", label: "Invisalign Treatment Complete" },
  { icon: Trophy, value: "30+", label: "Honorary Award for Best Quality Hospital" },
];

const schedule = [
  { day: "Monday – Thursday", time: "08:00 – 18:00" },
  { day: "Friday", time: "09:00 – 17:00" },
  { day: "Saturday", time: "07:30 – 20:30" },
  { day: "Sunday", time: "08:30 – 19:30" },
];

const StatsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={`section-subtitle ${styles.subtitle}`}>Teeth Strength</p>
          <h2 className={`section-title ${styles.title}`}>
            Commitment To Your{" "}
            <span>Oral Health</span> And Smile Aesthetics
          </h2>
        </div>

        <div className={styles.gridContainer}>
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.scheduleCard}
          >
            <h3 className={styles.scheduleTitle}>Schedule Hours</h3>
            <div className={styles.scheduleList}>
              {schedule.map((s) => (
                <div key={s.day} className={styles.scheduleItem}>
                  <span className={styles.dayText}>{s.day}</span>
                  <span className={styles.timeText}>{s.time}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className={styles.emergencyLink}>
              24/7 Service For Emergencies →
            </a>
          </motion.div>

          {/* Stats grid */}
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={styles.statCard}
              >
                <stat.icon className={styles.statIcon} />
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
