import React, { useState } from "react";
import InputField from "./components/InputField";
import TodoItem from "./components/TodoItem";

export interface Todo {
  id: number;
  name: string;
  isDone: boolean;
}

export default function Home(): JSX.Element {
  const [activity, setActivity] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (activity) {
      setTodos([...todos, { id: Date.now(), name: activity, isDone: false }]);
      setActivity("");
    }
  };
  return (
    <>
      <main>
        <div className=" h-[12vh] grid place-content-center bg-stone-900 ">
          <p className=" font-bold text-2xl text-white">To do List</p>
        </div>
        <div >
          <InputField
            activity={activity}
            setActivity={setActivity}
            addHandler={addHandler} />
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-5 w-10/12 grid place-content-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {todos.map(todo => {
              return <TodoItem todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
            })}
          </div>
        </div>
      </main>
    </>
  );
}
