"use client";


import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

import dynamic from 'next/dynamic';

const TODOListNoSSR = dynamic(() => import('@/components/TODOList'), { ssr: false });

function gerarIdAleatorio() {
  let id = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i++) {
      id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return id;
}

function Home() {
  const [todos, setTodos] = React.useState([]);
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form setTodos={setTodos} gerarIdAleatorio={gerarIdAleatorio} />

      <TODOListNoSSR todos={todos} />
    </div>
  );
}
export default Home;