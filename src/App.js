import { useState } from "react";
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentCard from "./components/ContentCard/ContentCard";
import "./assets/card-styles.css";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import { Button, Input } from "reactstrap";
import axios from "axios"


function App() {
  const renderContentList = () => {
    const renderArr = todoList.map((val, index) => {
      return (
        <ToDoItem
          tanggal={val.tanggal}
          title={val.title}
          status={val.status}
          editItem={() => editItem(val.id)}
          deleteItem={() => deleteItem(val.id)}
        />
      );
    });
    return renderArr;
  };

  const [todoList, setTodoList] = useState([]);

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
    const newData = {
      tanggal: dateInputValue,
      title: todoInputValue,
      status: "On Going",
    }
    axios.post("http://localhost:2000/todos", newData)
    .then(() => {
      fetchTodoList()
    })
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:2000/todos/${id}`)
    .then(() => {
      fetchTodoList()
    })
  };

  const editItem = (id) => {
    let newStatusValue
    axios.get(`http://localhost:2000/todos/${id}`)
    .then((res) => {
      // newStatusValue = res.data.status
      if (res.data.status === "Done") {
        newStatusValue = "On Going"
      } else if (res.data.status === "On Going") {
        newStatusValue = "Done"
      }
      
      axios.patch(`http://localhost:2000/todos/${id}`,{ status: newStatusValue})
      .then(() => {
        fetchTodoList()
      })
    })
  };

  const fetchTodoList = () => {
    axios.get("http://localhost:2000/todos")
    .then((res) => {
      setTodoList(res.data)
    })
  }

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
              <Button onClick={fetchTodoList} color="info">Fetch Todo</Button>
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
