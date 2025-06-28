import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DarkTheme from "../../layouts/Dark";

const BlogDetailsDynamic = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const router = useRouter();
  const { slug } = router.query;
  const [BlogComponent, setBlogComponent] = useState(null);

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

      <Footer />
    </DarkTheme>
  );
};

export default BlogDetailsDynamic;
