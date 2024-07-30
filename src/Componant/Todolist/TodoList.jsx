import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [inputDoto, setInputDoto] = useState("");

  // this used for adding todo list in array format

  const Todo = [
    {
      inputDoto,
    },
  ];
  const [todoList, setTodoList] = useState(Todo);

  //   const newTodo = Todo.map((list) => {

  // but todo value is assign to the todolist that why we creact map of todolist
  const newTodo = todoList.map((list) => {
    return (
      <div className="  flex text-start justify-start text-black">
        <div >
         <p className=" bg-orange-100  p-1 rounded-2xl mt-2 w-64 text-start hover:bg-amber-400 hover:text-rose-700">
          {list.inputDoto}
          </p>
       
        </div>
        <button className="bg-black text-white" onClick={remove}>delete</button>
        <br />
      </div>
      
    );
    
  });

  function addTodoList() {
    // ... is a spread operator
    const updatetodoList = [...todoList, { inputDoto }];

    setTodoList(updatetodoList);
    // this is for blank input field after first todo
    setInputDoto("");
  }

  function remove(del){
    const delet =[...TodoList,{inputDoto}]
   delet.splice(del,1)
    setTodoList(delet)
  }
 
  return (
    <div className=" bg-slate-200 flex justify-center text-center text-white  h-screen ">
      <div className="mt-7 bg-slate-800 w-96 h-96 rounded-2xl">
        <h3 className="text-xl text-center font-bold  hover:text-red-300  rounded-2xl">
          GET THINGS DONE!!!
        </h3>
        <div>
          {" "}
          <input
            className="bg-slate-200 p-1 rounded-2xl mt-4 w-64 text-black"
            placeholder="add todolist"
            type="text"
            value={inputDoto}
            onChange={(e) => setInputDoto(e.target.value)}
          />
          <button
            className="rounded-2xl bg-blue-950 text-sm p-2 m-2 border-orange-100 hover:bg-amber-400 hover:text-rose-700"
            onClick={addTodoList}
          >
            ADD
          </button>
        </div>

        <p className=" hover:text-red-500 flex justify-start font-bold">
          {" "}
          below doto list :{")"}{" "}
        </p>

        {/* here we wring a map componant  */}
        <div>
          <ul className="">
            <li className="text-left ml-6 mt-5">{newTodo}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
