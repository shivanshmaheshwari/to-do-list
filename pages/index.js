import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [todo, setTodo] = useState([title: "",desc: ""])

  const addTodo = () => { 

   }

   const onchange = () => {  }
  return (
    <div className="my-2  text-3xl">
      
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          {/* <h1 className="mb-1  ">ADD TODO</h1> */}
          <div class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            ADD TODO
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                TUDO TITLE
              </label>
              <input
                value={todo.title}
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                TUDO TEXT
              </label>
              <input
                value={todo.desc}
                type="text"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick={addTodo} class="text-white bg-indigo-500 w-2/12 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              ADD TUDO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
