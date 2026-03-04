"use client";
import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../scss/Navbar.module.scss";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top info bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContent}`}>
          <div className={styles.contactInfo}>
            <a href="tel:0001234567890" className={styles.contactLink}>
              <Phone className="w-4 h-4" />
              <span>Need to Talk</span>
              <b>(000)123456789</b>
            </a>
            <a href="mailto:info@yourdomain.com" className={styles.contactLink}>
              <Mail className="w-4 h-4" />
              <span>Email Address</span>
              <b>info@yourdomain.com</b>
            </a>
          </div>
          <div className={styles.location}>
            <MapPin className="w-4 h-4" />
            <span>Main Location</span>
            <b>Los Angeles, CA</b>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={styles.nav}>
        <div className={`container ${styles.navContent}`}>
          {/* Logo */}
          <a href="#home" className={styles.logo}>
            <Image
              src="/assets/amjin-logo.png"
              alt="Amjin Dental"
              width={150}
              height={50}
              className={styles.logoImg}
              priority
            />
          </a>

          {/* Desktop nav */}
          <ul className={styles.desktopNav}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a
              href="#appointment"
              className={styles.appointmentBtn}
            >
              <ArrowRight className="w-4 h-4" />
              Make Appointment
            </a>
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={styles.mobileMenu}
            >
              <ul className={styles.mobileNavList}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={styles.mobileNavLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#appointment"
                    className={styles.mobileAppointmentBtn}
                    onClick={() => setMobileOpen(false)}
                  >
                    <ArrowRight className="w-4 h-4" />
                    Make Appointment
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
