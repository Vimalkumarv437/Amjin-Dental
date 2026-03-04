"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import styles from "../../scss/BlogSection.module.scss";

const posts = [
  {
    img: "/assets/blog-1.jpg",
    category: "Braces",
    date: "Jul 09, 2025",
    title: "How to plan for & handle the cost of braces",
    desc: "Most people think of brushing and flossing as but did you know your oral health…",
  },
  {
    img: "/assets/blog-2.jpg",
    category: "Technology",
    date: "Jul 09, 2025",
    title: "New dental tech makes treatment faster & better",
    desc: "Most people think of brushing and flossing as but did you know your oral health…",
  },
  {
    img: "/assets/blog-3.jpg",
    category: "Dental",
    date: "Jul 09, 2025",
    title: "Learn what your dentist really does",
    desc: "Most people think of brushing and flossing as but did you know your oral health…",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={`section-subtitle ${styles.subtitle}`}>Fresh News</p>
          <h2 className={`section-title ${styles.title}`}>
            Articles & Blog Posts With <br className="hidden md:block" />
            <span>Useful Information</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.card}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>
                    {post.category}
                  </span>
                  <span className={styles.date}>
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>
                  {post.title}
                </h3>

                <p className={styles.desc}>
                  {post.desc}
                </p>

                <a
                  href="#"
                  className={styles.readMore}
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
