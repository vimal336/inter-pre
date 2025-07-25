import React, { createContext, useContext, useState } from "react";
import UseLayoutEff from "./UseLayoutEff";
import { UseReduce } from "./useReduce";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { UsersCard } from "./UsersCard";
import Quotes from "./Quotes";
import { Useeffecthook } from "./Useeffecthook";
import TableFilter from "./Challenge/TableFilter";
import { Todos } from "./Todos";
import { Axios } from "./Axios";
import { User } from "./use_context_hook/User";
import { UseMemoHook } from "./UseMemoHook";
import Navbar from "./NavBar";
import { ErrorNotFound } from "./ErrorNotFound";
import { UserefHook } from "./UserefHook";
import { UseStateHook } from "./UseStateHook";
import TaskManager from "./TaskManager";
import { Onecomp } from "./components/Onecomp";
import BoxModel  from "./BoxModel";
import { Twocomp } from "./components/Twocomp";
import UseCb from "./UseCb";
import Interview from "./Interview";
import Mapping from "./Mapping";
import UseCall from "./UseCall";
import Javascript from "./Javascript";
import HtmlCss from "./HtmlCss";
import Redux from "./Redux";
import Bootstrap from "./Bootstrap";
import Project from "./Project";
import ProblemSolving from "./ProblemSolving";
import Challenges from "./Challenge/Challenges";
import HooksFaq from "./hooks/HooksFaq"
import Main from "./TailwindSite/MainPage";

export const ThemeContext = createContext();

export const mycontext = createContext();

function App() {
  const [theme, setTheme] = useState("Light");
  const [user, setuser] = useState("vimal");

  const toggleTheme = () =>{
    setTheme(curr => curr === "Light"? "dark" : "Light");
  }

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="Interview" element={<Interview/>}></Route>
     <Route path="/" element={<Axios/>}></Route>
      <Route path="Axios" element={<Axios/>}></Route>
      <Route path="UseReduce" element={<UseReduce/>}></Route>
      <Route path="Axios" element={<Axios/>}></Route>
      <Route path="UseStateHook" element={<UseStateHook/>}></Route>
      <Route path="ProblemSolving" element={<ProblemSolving/>}></Route>
      <Route path="UseeffectHook" element={<Useeffecthook/>}></Route>
      <Route path="HooksFaq" element={<HooksFaq/>}></Route>
      <Route path="UseLayoutEff" element={<UseLayoutEff/>}></Route>
      <Route path="Projects" element={<Project/>}></Route>
      <Route path="Todos" element={<Todos/>}></Route>
      <Route path="UseMemoHook" element={<UseMemoHook/>}></Route>
      <Route path="Quotes/:username" element={<Quotes/>}></Route>
      <Route path="UsersCard" element={<UsersCard/>}></Route>
      <Route path="UseRefHook" element={<UserefHook/>}></Route>
      <Route path="UseCallBack" element={<UseCb/>}></Route>
      <Route path="TaskManager" element={<TaskManager/>}></Route>
      <Route path="BoxModel" element={<BoxModel/>}></Route>
      <Route path="Mapping" element={<Mapping/>}></Route>
      <Route path="UseCall" element={<UseCall/>}></Route>
      <Route path="*" element={<ErrorNotFound/>}></Route>
      <Route path="Javascript" element={<Javascript/>}></Route>
      <Route path="TailwindSite" element={<Main/>}></Route>
      <Route path="HtmlCss" element={<HtmlCss/>}></Route>
      <Route path="Redux" element={<Redux/>}></Route>
      <Route path="Bootstrap" element={<Bootstrap/>}></Route>
      <Route path="Challenges" element={<Challenges/>}></Route>
      <Route path="TableFilter" element={<TableFilter/>}></Route>
     </Routes>
     </BrowserRouter>


     <ThemeContext.Provider value={{theme,}}>
     <User/>
     <button onClick={toggleTheme}>Change Theme</button>
     <h1>{theme}</h1>
     </ThemeContext.Provider>

    <mycontext.Provider value={user}>
       <h1>{`hello ${user}`}</h1>
       <Onecomp/>
    </mycontext.Provider>

    


    </>
  );
}

export default App;
