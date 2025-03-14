"use client";


import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

function gerarIdAleatorio() {
  let id = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i++) {
      id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return id;
}

function Home() {
  const [todos, setTodos] = React.useState([
    {
      title: "Some task",  // string
      id: gerarIdAleatorio(), // string
      is_completed: false // boolean
    },
    {
      title: "Some other task",  // string
      id: gerarIdAleatorio(), // string
      is_completed: true // boolean
    },{
      title: "last task",  // string
      id: gerarIdAleatorio(), // string
      is_completed: false // boolean
    }
  ]);
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={0} total_todos={0} />
      <Form />
      <TODOList todos={todos} />
    </div>
  );
}
export default Home;