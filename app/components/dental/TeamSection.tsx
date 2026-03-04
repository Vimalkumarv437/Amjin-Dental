"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import styles from "../../scss/TeamSection.module.scss";

const team = [
  { name: "Samuel Peterson", role: "Clinical Director", img: "/assets/team-1.jpg" },
  { name: "Emily Brown", role: "Dental Therapist", img: "/assets/team-2.jpg" },
  { name: "Robert Green", role: "Dental Assistant", img: "/assets/team-3.jpg" },
  { name: "Emily Cho", role: "Orthodontist", img: "/assets/team-4.jpg" },
];

const socials = [Facebook, Twitter, Instagram, Youtube];

const TeamSection = () => {
  return (
    <section id="team" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-subtitle mb-3">Selected Work</p>
          <h2 className={`section-title ${styles.title}`}>
            The Best Of Our Capacity <br className="hidden md:block" />
            <span>By Expert Team</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={member.img}
                  alt={member.name}
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <p className={styles.role}>
                  {member.role}
                </p>
                <h3 className={styles.name}>
                  {member.name}
                </h3>

                <div className={styles.socials}>
                  {socials.map((Icon, j) => (
                    <a
                      key={j}
                      href="#"
                      className={styles.socialIcon}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
