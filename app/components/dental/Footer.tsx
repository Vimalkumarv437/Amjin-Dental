"use client";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";
import styles from "../../scss/Footer.module.scss";

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div>
            <div className={styles.logoWrapper}>
              <Image
                src="/assets/amjin-logo.png"
                alt="Amjin Dental"
                width={180}
                height={60}
                className={styles.logoImg}
              />
            </div>
            <p className={styles.brandDesc}>
              Providing exceptional dental care with cutting-edge technology and a compassionate approach for over 25 years.
            </p>
            <div className={styles.socials}>
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={styles.socialLink}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {["Home", "About Us", "Services", "Our Team", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className={styles.link}>
                    <ArrowRight className="w-3 h-3" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.linkList}>
              {["General Dentistry", "Cosmetic Dentistry", "Dental Implants", "Teeth Whitening", "Cavity Protection", "Restorative"].map((s) => (
                <li key={s}>
                  <a href="#services" className={styles.link}>
                    <ArrowRight className="w-3 h-3" /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <p className={styles.contactText}>Los Angeles, Gournadi, Barisal</p>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <p className={styles.contactText}>(000)123456789</p>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <p className={styles.contactText}>info@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2025 Amjin Dental. All Rights Reserved. Designed with care for your smile.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
