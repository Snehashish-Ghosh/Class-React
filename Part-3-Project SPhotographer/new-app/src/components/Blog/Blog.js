import React, { useEffect, useState } from "react";
import AboutHeader from "../AboutHeader/AboutIHeader";
import SectionHeading from "../SectionHeading/SectionHeading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import "./Blog.css";
import BlogPost from "../SingleBlog/SingleBlog";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <>
      <AboutHeader />
      <section className="blog-area">
        <Container>
          <SectionHeading heading="Questions Answer" />
          <Row>
            {blog.map((item) => (
              <BlogPost key={item.id} item={item}></BlogPost>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
