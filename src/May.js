import React, { useState } from 'react';
import "./todo123.css";
import { Button, Card, Form } from 'react-bootstrap';


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
      text: "Go to Gym",
      isDone: false
    },
    {
        text: "Learn Python from FreeCodeCamp",
        isDone: false
      },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="todo1234">
      <div className="container">
        <h1 className="text-center mb-4">May</h1>
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