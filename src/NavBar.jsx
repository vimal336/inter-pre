// import { Link } from 'react-router-dom'
// import './NavBar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-list">
//         <li className="navbar-item"><Link to="/">Home</Link></li>
//         <li className="navbar-item"><Link to="Interview">Interview</Link></li>
//         <li className="navbar-item"><Link to="Javascript">Javascript</Link></li>
//         <li className="navbar-item"><Link to="UseStateHook">UseState</Link></li>
//         <li className="navbar-item"><Link to="UseReduce">UseReduce</Link></li>
//         <li className="navbar-item"><Link to="UseeffectHook">UseeffectHook</Link></li>
//         <li className="navbar-item"><Link to="UseLayoutEff">UseLayout</Link></li>
//         <li className="navbar-item"><Link to="UserefHook">UseRef</Link></li>
//         <li className="navbar-item"><Link to="UseMemoHook">UseMemo</Link></li>
//         <li className="navbar-item"><Link to="UseCallBack">UseCallBack</Link></li>
//         <li className="navbar-item"><Link to="Todos">Todos</Link></li>
//         <li className="navbar-item"><Link to="Axios">Axios</Link></li>
//         <li className="navbar-item"><Link to="UsersCard">UsersCard</Link></li>
//         <li className="navbar-item"><Link to="Quotes">Quotes</Link></li>
//         <li className="navbar-item"><Link to="TaskManager">Crud</Link></li>
//         <li className="navbar-item"><Link to="BoxModel">Model</Link></li>
//         <li className="navbar-item"><Link to="Mapping">Mapping</Link></li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar


import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="hidden md:flex items-center gap-x-6">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/interview" className="hover:text-gray-400">Interview</Link></li>
          <li><Link to="/HooksFaq" className="hover:text-gray-400">Hooks</Link></li>
          <li><Link to="/javascript" className="hover:text-gray-400">Javascript</Link></li>
          <li><Link to="/HtmlCss" className="hover:text-gray-400">Html&css</Link></li>
          <li><Link to="/Redux" className="hover:text-gray-400">Redux</Link></li>
          <li><Link to="/Bootstrap" className="hover:text-gray-400">Bootstrap</Link></li>
          <li><Link to="/ProblemSolving" className="hover:text-gray-400">Problems</Link></li>
          <li><Link to="/Projects" className="hover:text-gray-400">Project</Link></li>
          <li><Link to="/TaskManager" className="hover:text-gray-400">CRUD</Link></li>
          <li><Link to="/BoxModel" className="hover:text-gray-400">Model</Link></li>
          <li><Link to="/mapping" className="hover:text-gray-400">Mapping</Link></li>
          <li><Link to="/Todos" className="hover:text-gray-400">Todos</Link></li>
          <li><Link to="/UseCallBack" className="hover:text-gray-400">UseCallBack</Link></li>
          <li><Link to="/UseMemoHook" className="hover:text-gray-400">Usememohook</Link></li>
          <li><Link to="/Challenges" className="hover:text-gray-400">Task</Link></li>
          <li><Link to="/TailwindSite" className="hover:text-gray-400">Site</Link></li>
          {/* <li><Link to="/useCall" className="hover:text-gray-400">Usecall</Link></li>
          <li><Link to="/use-reducer" className="hover:text-gray-400">UseReduce</Link></li>
          <li><Link to="/use-effect-hook" className="hover:text-gray-400">UseEffect</Link></li>
          <li><Link to="/use-layout-effect" className="hover:text-gray-400">UseLayout</Link></li>
          <li><Link to="/use-ref-hook" className="hover:text-gray-400">UseRef</Link></li>
          <li><Link to="/use-memo-hook" className="hover:text-gray-400">UseMemo</Link></li>
          <li><Link to="/Axios" className="hover:text-gray-400">Axios</Link></li>
          <li><Link to="/UsersCard" className="hover:text-gray-400">UsersCard</Link></li>
          <li><Link to="/quotes" className="hover:text-gray-400">Quotes</Link></li>
          <li><Link to="/useCall" className="hover:text-gray-400">Usecall</Link></li> */}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/interview" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Interview</Link></li>
            <li><Link to="/javascript" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Javascript</Link></li>
            <li><Link to="/HtmlCss" className="hover:text-gray-400"onClick={() => setIsOpen(false)}>HtmlCss</Link></li>
            <li><Link to="/Redux" className="hover:text-gray-400"onClick={() => setIsOpen(false)}>Redux</Link></li>
            <li><Link to="/HooksFaq" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Hooks</Link></li>
            <li><Link to="/Bootstrap" className="hover:text-gray-400"onClick={() => setIsOpen(false)}>Bootstrap</Link></li>
            <li><Link to="/Projects" className="hover:text-gray-400"onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="/ProblemSolving" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Problem</Link></li>
            <li><Link to="/TaskManager" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>CRUD</Link></li>
            <li><Link to="/BoxModel" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Model</Link></li>
            <li><Link to="/Challanges" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>UseCallBack</Link></li>
            <li><Link to="/useCallBack" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Challanges</Link></li>
            <li><Link to="/TailwindSite" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Site</Link></li>
            {/* <li><Link to="/use-state-hook" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>UseState</Link></li>
            <li><Link to="/use-reducer" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>UseReduce</Link></li>
            <li><Link to="/use-effect-hook" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>UseEffect</Link></li>
            <li><Link to="/use-layout-effect" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>UseLayout</Link></li>
            <li><Link to="/use-ref-hook" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>UseRef</Link></li>
            <li><Link to="/use-memo-hook" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>UseMemo</Link></li>
            <li><Link to="/todos" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Todos</Link></li>
            <li><Link to="/axios" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Axios</Link></li>
            <li><Link to="/users-card" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>UsersCard</Link></li>
            <li><Link to="/quotes" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Quotes</Link></li>
            <li><Link to="/mapping" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Mapping</Link></li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
