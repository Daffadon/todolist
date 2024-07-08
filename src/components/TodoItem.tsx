import React, { useState } from "react";
import { Todo } from "../pages/index";
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
  const [actToChange, setActToChange] = useState<string>(todo.name)
  const [isEdit, setIsEdit] = useState<boolean>(false);
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
  const saveHandler = () => {
    const updatedToDo = {
      ...todo,
      name: actToChange
    };
    const editedIndex = todos.findIndex(toChange => {
      return toChange.id === todo.id;
    })
    const newTodos = [...todos];
    newTodos[editedIndex] = updatedToDo;
    setTodos(newTodos);
    setIsEdit(false);
  }
  const recoverHandler = (itemToRecover: Todo) => {
    setTodos(prev => ([...prev, itemToRecover]))
    deleteHandler(itemToRecover);
  }
  return (
    <div className="bg-orange-300 rounded-xl flex items-center justify-between px-3 py-4">
      {isEdit ?
        <form onSubmit={saveHandler} className="flex justify-center items-center">
          <input
            type="text"
            name="activity"
            value={actToChange}
            onChange={(e) => {
              setActToChange(e.target.value);
            }}
            className="w-full rounded h-10 bg-neutral-200 px-3 border-2 outline-none focus:border-blue-500 font-bold border-transparent focus:border-solid transition-all" />
        </form>
        :
        <p className="font-bold text-xl w-9/12 truncate">{todo.name}</p>
      }
      <div className="flex gap-2">
        <button onClick={deleteHandler.bind(this, todo)}>
          <AiFillDelete size={35} className="hover:text-red-500 transition-all duration-300" />
        </button>
        {!isDone ?
          <>
            {!isEdit ?
              <>
                <button onClick={() => {
                  setIsEdit(true);
                }}>
                  <BsPencilSquare size={35} className="hover:text-blue-700 transition-all duration-300" />
                </button>
                <button onClick={doneHandler.bind(this, todo)}>
                  <BsCheckLg size={35} className="hover:text-green-600 transition-all duration-300" />
                </button>
              </>
              :
              <>
                <button onClick={saveHandler}>
                  <BsCheckLg size={35} className="hover:text-green-600 transition-all duration-300" />
                </button>
              </>
            }
          </>
          :
          <>
            <button onClick={recoverHandler.bind(this, todo)}>
              <MdRestore size={35} className="hover:text-blue-700 transition-all duration-300" />
            </button>
          </>
        }
      </div>
    </div>
  )
}

export default TodoItem