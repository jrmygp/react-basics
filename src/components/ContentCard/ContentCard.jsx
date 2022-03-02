import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { FaHeart } from "react-icons/fa"
import { IoIosPaperPlane } from "react-icons/io";
import { MdReportProblem } from "react-icons/md";
import newyork from "./twintower.jpeg";

const ContentCard = (props) => {
  const likePost = (amount) => {
    props.numberOfLikes += 1;
    alert(`Liked post ${props.numberOfLikes}`);
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5" className="fw-bold">
          {props.username}
        </CardTitle>
        <CardSubtitle tag="h6" className="text-muted mb-4">
          {props.location}
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
          {props.numberOfLikes.toLocaleString()} People like this.
        </CardText>
        <CardText>
          <span className="fw-bold">{props.username} </span>{" "}
          <span>
            {props.caption.length > 140 ? props.caption.slice(0, 140) + "..." : props.caption}
          </span>
        </CardText>
        <div className="d-flex">
          <Button
            onClick={() => likePost(14)}
            color="danger"
            className="d-flex justify-content-center align-items-center"
          >
            <FaHeart/>
          </Button>

          <Button
            color="danger"
            className="d-flex justify-content-center align-items-center ms-2"
          >
            <MdReportProblem />
          </Button>
        </div>

        <CardText className="mt-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Comment"
            />{" "}
            <button className="btn btn-outline-secondary" type="button">
              <IoIosPaperPlane />
            </button>
          </div>
        </CardText>
      </CardBody>
    </Card>
  );
};
export default ContentCard;
