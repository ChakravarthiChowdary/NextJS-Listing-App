import TodoCard from "@/components/Card";
import React, { useState } from "react";

interface IHomeProps {
  todos: {
    id: number;
    title: string;
    description: string;
    userId: number;
    completed: boolean;
  }[];
}

const Home: React.FC<IHomeProps> = ({ todos: result }) => {
  const [todos, setTodos] = useState(result);

  const deleteTodo = (id: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <div className="mx-3">
      <h5 className="mt-3">Find your list and get it done here</h5>
      <div className="row">
        {todos.map((todo) => (
          <TodoCard todo={todo} key={todo.id} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const result = await response.json();

  return {
    props: {
      todos: result,
    },
  };
}
