import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const {
    _id,
    author,
    rating,
    total_view,
    title,
    thumbnail_url,
    image_url,
    details,
  } = news;
  return (
    <div>
      <Card className=" mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-item-center align-content-center">
            <Image
              roundedCircle
              src={author.img}
              style={{ height: "60px" }}
              className="me-3"
            ></Image>
            <div className="">
              <p className="mb-0">{author.name}</p>
              <p className="mb-0">{author.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-3"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 200 ? (
              <>
                {" "}
                {details.slice(0, 250)}
                {"... "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            ) : (
              <>{details} </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar className="text-warning me-3"></FaStar>
            <span>{rating.number}</span>
          </div>
          <div>
            <FaEye className="me-3"></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
