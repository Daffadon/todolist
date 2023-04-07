import React from "react";
import { Todo } from "../index";
import { AiFillDelete } from "react-icons/ai"
import { BsCheckLg, BsPencilSquare } from "react-icons/bs"
import { MdRestore } from "react-icons/md"
interface TodoItemProps {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  done: Todo[]
  setDone: React.Dispatch<React.SetStateAction<Todo[]>>
  isDone: boolean
}
const TodoItem: React.FC<TodoItemProps> = ({ todo, todos, setTodos, done, setDone, isDone }) => {
  const deleteHandler = (itemToDelete: Todo) => {
    if (!isDone) {
      const newTodos = todos.filter((item) => {
        return item.id !== itemToDelete.id
      })
      setTodos(newTodos);
    } else {
      const newDone = done.filter((item) => {
        return item.id !== itemToDelete.id
      })
      setDone(newDone)
    }
  }
  const doneHandler = (itemToBeDone: Todo) => {
    setDone(prev => ([...prev, itemToBeDone]))
    deleteHandler(itemToBeDone);
  }
  return (
    <div className="bg-orange-300 rounded-xl flex items-center justify-between px-3 py-4">
      <p className="font-bold text-xl w-9/12 truncate">{todo.name}</p>
      <div className="flex gap-2">
        <button onClick={deleteHandler.bind(this, todo)}>
          <AiFillDelete size={35} className="hover:text-red-500 transition-all duration-300" />
        </button>
        {!isDone ?
          <>
            <button>
              <BsPencilSquare size={35} className="hover:text-blue-700 transition-all duration-300" />
            </button>
            <button onClick={doneHandler.bind(this, todo)}>
              <BsCheckLg size={35} className="hover:text-green-600 transition-all duration-300" />
            </button>
          </>
          :
          <>
            <button>
              <MdRestore size={35} className="hover:text-blue-700 transition-all duration-300" />
            </button>
          </>
        }
      </div>
    </div>
  )
}

export default TodoItem