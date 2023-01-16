import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const { category_id, title, image_url, details } = useLoaderData();

  return (
    <div>
      <Card style={{}}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary" className="text-white">
              All News in this Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
