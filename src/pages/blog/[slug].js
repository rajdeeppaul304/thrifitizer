import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DarkTheme from "../../layouts/Dark";
import BlogsThreeColumn1 from "../../components/Blogs-three-column1_2";
import Link from "next/link";
import { Formik, Form, Field } from "formik";

const BlogDetailsDynamic = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const router = useRouter();
  const { slug } = router.query;
  const [BlogComponent, setBlogComponent] = useState(null);

  // 👉 Array of blog slugs (fill with real slugs later)
  const blogSlugs = ["google_growth", "optimize_sge", "automated_bidding", "how_fast_google_index"];

  const currentIndex = blogSlugs.indexOf(slug);
  const prevSlug = blogSlugs[currentIndex - 1] || null;
  const nextSlug = blogSlugs[currentIndex + 1] || null;

  useEffect(() => {
    if (!slug) return;

    const loadComponent = async () => {
      try {
        const DynamicBlog = dynamic(() =>
          import(`../../components/Blogs/${slug}`)
        );
        setBlogComponent(() => DynamicBlog);
      } catch (error) {
        console.error("Blog not found:", slug);
        setBlogComponent(() => () => <p>Blog not found</p>);
      }
    };

    loadComponent();
  }, [slug]);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    }
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />

      {BlogComponent ? <BlogComponent /> : <p>Loading blog...</p>}

      <div className="blog-pg single section-padding pt-0">
        <div className="post">
          <div className="pagination">
            <span>
              {prevSlug ? (
                <Link href={`/blog/${prevSlug}`}>
                  <a>Prev Post</a>
                </Link>
              ) : (
                <a className="disabled">Prev Post</a>
              )}
            </span>
            <span className="icon">
              {/* <Link href="/blog/blog-dark"> */}
                <a>
                  <i className="fas fa-th-large"></i>
                </a>
              {/* </Link> */}
            </span>
            <span className="text-right">
              {nextSlug ? (
                <Link href={`/blog/${nextSlug}`}>
                  <a>Next Post</a>
                </Link>
              ) : (
                <a className="disabled">Next Post</a>
              )}
            </span>
          </div>
        </div>
      </div>

      <BlogsThreeColumn1 subBG isBlogPage={true} />
      <Footer />
    </DarkTheme>
  );
};


export default BlogDetailsDynamic;
