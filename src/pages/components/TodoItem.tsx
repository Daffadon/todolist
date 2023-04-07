import React from "react";
import { Todo } from "../index";
import { AiFillDelete } from "react-icons/ai"
import { BsCheckLg, BsPencilSquare } from "react-icons/bs"
interface TodoItemProps {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoItem: React.FC<TodoItemProps> = ({ todo, todos, setTodos }) => {
  const deleteHandler = (itemToDelete: Todo) => {
    const newTodos=todos.filter((item)=>{
      return item.id !== itemToDelete.id
    })
    setTodos(newTodos);
  }
  return (
    <div className="bg-orange-300 rounded-xl flex items-center justify-between px-3 py-4">
      <p className="font-bold ">{todo.name}</p>
      <div className="flex gap-2">
        <button onClick={deleteHandler.bind(this, todo)}>
          <AiFillDelete size={35} className="hover:text-red-500 transition-all duration-300" />
        </button>
        <button>
          <BsPencilSquare size={35} className="hover:text-blue-700 transition-all duration-300" />
        </button>
        <button>
          <BsCheckLg size={35} className="hover:text-green-600 transition-all duration-300" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem