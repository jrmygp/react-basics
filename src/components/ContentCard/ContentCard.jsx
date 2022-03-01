import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import { FaHandMiddleFinger } from "react-icons/fa";

import newyork from "./newyork.jpeg";
const username = "seto";
const location = "BSD";
const numberOfLikes = 69420;
const caption =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit explicabo? Possimus nam necessitatibus praesentium sit at, vero quod neque, quaerat quasi excepturi totam quos. Expedita dicta non enim aspernatur corrupti necessitatibus nobis mollitia sed sapiente ducimus placeat, illo odit fugit quia error debitis ullam quo quidem? Corporis vitae adipisci voluptatibus reiciendis illum voluptas atque pariatur iusto aperiam aliquam minima cupiditate ab veritatis, eos ipsum at natus, possimus soluta ad?";

const ContentCard = () => {
  const likePost = (amount) => {
    numberOfLikes += 1;
    alert(`Liked post ${numberOfLikes}`);
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5" className="fw-bold">
          {username}
        </CardTitle>
        <CardSubtitle tag="h6" className="text-muted mb-4">
          {location}
        </CardSubtitle>

        <img
          style={{
            width: "100%",
          }}
          className="rounded"
          src={newyork}
          alt="user's content"
        />

        <CardText tag="h6" className="fw-bold mt-3">
          {numberOfLikes.toLocaleString()} People like this.
        </CardText>
        <CardText>
          <span className="fw-bold">{username} </span>{" "}
          <span>
            {caption.length > 140 ? caption.slice(0, 140) + "..." : caption}
          </span>
        </CardText>

        <Button
          onClick={() => likePost(14)}
          color="danger"
          className="d-flex justify-content-center align-items-center"
        >
          Like &nbsp;
          <FaHandMiddleFinger />
        </Button>
      </CardBody>
    </Card>
  );
};
export default ContentCard;
