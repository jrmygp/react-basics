import { useState } from "react";
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentCard from "./components/ContentCard/ContentCard";
import "./assets/card-styles.css";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import { Button, Input } from "reactstrap";

// const data = [
//   {
//     username: "seto",
//     location: "BSD",
//     numberOfLikes: 1231,
//     caption: "halo gaes",
//   },
//   {
//     username: "Volinsky",
//     location: "Russia",
//     numberOfLikes: 1929101,
//     caption: "About to go to Ukraine, wish me luck!",
//   },
//   {
//     username: "Makachaev",
//     location: "Ukraine",
//     numberOfLikes: 929292123,
//     caption: "Kill those russian invaders!",
//   },
// ];

function App() {
  const renderContentList = () => {
    const renderArr = todoList.map((val, index) => {
      return (
        <ToDoItem
          tanggal={val.tanggal}
          title={val.title}
          status={val.status}
          editItem={() => editItem(index)}
          deleteItem={() => deleteItem(index)}
        />
      );
    });
    return renderArr;
  };

  const [todoList, setTodoList] = useState([
    {
      tanggal: new Date(),
      title: "belajar programming",
      status: "On Going",
    },
    {
      tanggal: new Date(),
      title: "belajar programming",
      status: "On Going",
    },
    {
      tanggal: new Date(),
      title: "belajar programming",
      status: "Done",
    },
  ]);

  const [todoInputValue, setTodoInputValue] = useState("");
  const [dateInputValue, setDateInputValue] = useState("");

  const inputHandler = (event) => {
    const { value } = event.target;
    setTodoInputValue(value);
  };

  const inputDateHandler = (event) => {
    const { value } = event.target;
    setDateInputValue(value);
  };

  const addTodoItem = () => {
    const newTodoArray = [...todoList];
    newTodoArray.push({
      tanggal: dateInputValue,
      title: todoInputValue,
      status: "On Going",
    });
    setTodoList(newTodoArray);
  };

  const deleteItem = (index) => {
    const finalTodoArray = [...todoList];
    finalTodoArray.splice(index, 1);
    setTodoList(finalTodoArray);
  };

  const editItem = (index) => {
    const editTodoArray = [...todoList];
    if (editTodoArray[index].status === "Done") {
      editTodoArray[index].status = "On Going";
    } else if (editTodoArray[index].status === "On Going") {
      editTodoArray[index].status = "Done";
    }
    setTodoList(editTodoArray);
  };
  return (
    <>
      <div className="container mt-3 $green-800">
        <div className="row">
          <div className="row my-3">
            <div className="offset-3 col-5">
              <Input onChange={inputHandler} />
              <Input type="date" onChange={inputDateHandler} />
            </div>
            <div className="col-2">
              <Button color="success" onClick={addTodoItem}>
                {" "}
                Add Todo{" "}
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            {renderContentList()}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
