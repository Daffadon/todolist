import React, { useState } from "react";
import InputField from "./components/InputField";
import TodoItem from "./components/TodoItem";

export interface Todo {
  id: number;
  name: string;
}

export default function Home(): JSX.Element {
  const [activity, setActivity] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [done, setDone] = useState<Todo[]>([]);
  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (activity) {
      setTodos([...todos, { id: Date.now(), name: activity }]);
      setActivity("");
    }
  };
  return (
    <>
      <main>
        <div className="h-[12vh] grid place-content-center bg-stone-900 ">
          <p className="font-bold text-2xl text-white">To Do List</p>
        </div>
        <div >
          <InputField
            activity={activity}
            setActivity={setActivity}
            addHandler={addHandler} />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-center font-extrabold w-10/12 rounded-lg bg-yellow-500 py-3 text-white text-3xl mt-5">TO DO</p>
        </div>
        <div className="flex justify-center items-center min-h-[20vh]">
          <div className="mt-5 w-10/12 grid place-content-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {todos.map(todo => {
              return <TodoItem todo={todo} todos={todos} setTodos={setTodos} done={done} setDone={setDone} isDone={false} key={todo.id} />
            })}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-center font-extrabold w-10/12 rounded-lg bg-green-500 py-3 mt-10 text-white text-3xl">DONE</p>
        </div>
        <div className="flex justify-center items-center mb-10">
          <div className="mt-5 w-10/12 grid place-content-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {done.map(todo => {
              return <TodoItem todo={todo} todos={todos} setTodos={setTodos} done={done} setDone={setDone} isDone={true} key={todo.id} />
            })}
          </div>
        </div>
      </main>
    </>
  );
}
