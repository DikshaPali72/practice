import React from "react";
import { useState } from "react";

const Forms = () => {
    // this is for input

    const [Input, setInput] = useState(" ")

    // this is for updated  input

    const [NewInput, setNewInput] = useState(" ")

    const [Input2, setInput2] = useState(" ")
    const [NewInput2, setNewInput2] = useState(" ")



    function ChangeInput(event) {
        setInput(event.target.value)
    }

    function ChangeInput2(event) {
        setInput2(event.target.value)
    }



    function HandleInput() {
        setNewInput(Input)
        setNewInput2(Input2)
    }




    return (
        <center className="mt-5 bg-slate-300" >
            <h1 className=" text-xl ">
                WE CREATE A FROM STUCTURE USING USESTATE BASIC
            </h1>
            <br />
            <h4 className=" text-xl bg-red-300 w-64">HELLO {NewInput} </h4>
            <br />


            <input type="text" class="mt-1  block  sm:text-sm border border-gray-800 rounded-md p-2.5 w-96"
                value={Input}
                placeholder="enter name"
                onChange={ChangeInput}
            >

            </input>

            <input type="text" class="mt-1  block  sm:text-sm border border-gray-800 rounded-md p-2.5 w-96"
                value={Input2}
                placeholder="enter name"
                onChange={ChangeInput2}
            >

            </input>
            <br />

            <h4 className=" text-xl bg-red-300 w-64">HELLO {NewInput2} </h4>

            <br />
            <button onClick={HandleInput} className="text-xl bg-red-700 text-white p-2 rounded-lg"> submit </button>
        </center>
    );
};

export default Forms;
