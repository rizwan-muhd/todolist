import React from "react";
import { useState } from "react";
import "./App.css";

// main function  
function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");


  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var current = new Date();
  var day = days[current.getDay()];



  return (

    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo} onChange={(e) => { setTodo(e.target.value) }}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={() =>
          setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])
        }
          id="plus" className="fas fa-plus "
        ></i>
        <i className="fas fa-eraser"
          onClick={() => setTodo("")
          }></i>

      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);

                    setTodos(
                      toDos.filter((obj2) => {
                        console.log(obj2);
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                          return obj2
                        }
                        return obj2;

                      }),
                      console.log(obj.status)
                    );
                  }}

                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""


                />
                <p className={obj.status ? "underline" : ""}>
                  {obj.text}
                </p>




              </div>


              <div className="right">
                <i onClick={() => {
                  if (window.confirm("Are you sure to remove this ?")) {
                    setTodos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        console.log(obj);
                        console.log(obj2);
                        return null
                      }

                      return obj2;
                    }))
                  }
                }}

                  className="fas fa-trash"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div >
  );
}

export default App;
