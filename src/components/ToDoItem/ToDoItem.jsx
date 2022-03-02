import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useState } from "react";
import moment from "moment"

const ToDoItem = (props) => {
  const [status, setUserStatus] = useState(props.status);

//   const changeStatusUser = () => {
//     if (status === "Done") {
//       setUserStatus("On Going");
//     } else if (status === "On Going") {
//       setUserStatus("Done");
//     }
//   };

  return (
    <Card className="my-2">
      <CardBody>
        <div className="d-flex justify-content-between">
          <div>
            <CardTitle tag="h5" className="fw-bold">
              {moment(props.tanggal).format("DD MMM YYYY")}
            </CardTitle>
            <CardText>{props.title}</CardText>
          </div>
          <div>
            {props.status === "Done" ? (
              <Button color="success" onClick={props.editItem}>
                Done
              </Button>
            ) : (
              <Button color="danger" onClick={props.editItem}>
                On Going
              </Button>
            )}
            <Button color="secondary" className="ms-2" onClick={props.deleteItem}>Delete</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ToDoItem;
