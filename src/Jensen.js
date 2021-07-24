import React from 'react';
import "./todo123.css";
import {  Card } from 'react-bootstrap';


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span>{todo.text}</span>

    </div>
  );
}

function Todo123() {
  const [todos, setTodos] = React.useState([
    {
      text: "Go for a run",
      isDone: false
    },
    {
        text: "Meditation",
        isDone: false
    },
    {
        text: "Read Thinking Fast and Slow by Daniel Kahneman",
        isDone: false
      },
  ]);



  return (
    <div className="todo1234">
      <div className="container">
        <h1 className="text-center mb-4">Jensen</h1>
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo123;