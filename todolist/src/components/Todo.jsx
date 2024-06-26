import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        
        if(inputText === "") {
            return null;
        }
        
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList( (prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {
        setTodoList( (prevTodo) => {
           return prevTodo.filter( (todo) => todo.id !== id)
        })
    }

    const toggle = (id) => {
        setTodoList( (prvTodo) => {
            return prvTodo.map( (todo) => {
                if(todo.id === id) {
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect( () => {
        console.log(todoList);
    }, [todoList])

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

        <div className="flex items-center mt-7 gap-2">
            <img className="w-8" src={logo} alt="" />
            <h1 className="text-3xl font-semibold">To-Do List</h1>
        </div>

        <div className="flex items-center my-7 bg-gray-200 rounded-full">
            <input 
            ref={inputRef}
            className="bg-transparent border-0 outline-none flex-1 h-14 pl-7 pr-2 placeholder:text-slate-600"
            type="text" 
            placeholder="Add your task" />
            <button onClick={add} className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">ADD +</button>
        </div>

        <div>
            {todoList.map((item, index) => {
                return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
            })}
        </div>

    </div>
  );
};

export default Todo;
