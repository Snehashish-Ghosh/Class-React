import React from "react";
import Col from "react-bootstrap/esm/Col";
import "./SingleBlog.css";

const SingleBlog = ({ item }) => {
  return (
    <Col lg={4}>
      <div className="single-blog-post">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    </Col>
  );
};

export default SingleBlog;
