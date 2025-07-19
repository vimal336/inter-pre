import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Frontend Basics",
      links: [
        { name: "HTML & CSS", path: "/HtmlCss" },
        { name: "JavaScript", path: "/javascript" },
        { name: "Bootstrap", path: "/Bootstrap" },
        { name: "Box Model", path: "/BoxModel" },
        { name: "Mapping", path: "/mapping" },
      ],
    },
    {
      name: "React Hooks",
      links: [
        { name: "UseState", path: "/UseStateHook" },
        { name: "UseEffect", path: "/UseeffectHook" },
        { name: "UseReducer", path: "/UseReduce" },
        { name: "UseLayout", path: "/UseLayoutEff" },
        { name: "UseRef", path: "/UserefHook" },
        { name: "UseMemo", path: "/UseMemoHook" },
        { name: "UseCallback", path: "/UseCallBack" },
        { name: "Hooks FAQ", path: "/HooksFaq" },
      ],
    },
    {
      name: "Projects",
      links: [
        { name: "Task Manager", path: "/TaskManager" },
        { name: "Todos", path: "/Todos" },
        { name: "Users Card", path: "/UsersCard" },
        { name: "Quotes", path: "/Quotes" },
        { name: "Table Filter", path: "/TableFilter" },
        { name: "Tailwind Site", path: "/TailwindSite" },
      ],
    },
    {
      name: "Advanced",
      links: [
        { name: "Redux", path: "/Redux" },
        { name: "Axios", path: "/Axios" },
        { name: "Problem Solving", path: "/ProblemSolving" },
        { name: "Challenges", path: "/Challenges" },
        { name: "Interview", path: "/interview" },
      ],
    },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-x-6 items-center mx-auto">
          {categories.map((category) =>
            category.links ? (
              <li className="relative group" key={category.name}>
  <span className="cursor-pointer hover:text-gray-400">
    {category.name}
  </span>

  <ul className="absolute top-full left-0 bg-gray-800 p-2 rounded shadow-lg hidden group-hover:flex flex-col z-50 min-w-max">
    {category.links.map((link) => (
      <li key={link.path} className="py-1 px-4 hover:bg-gray-700 rounded whitespace-nowrap">
        <Link to={link.path}>{link.name}</Link>
      </li>
    ))}
  </ul>
</li>

            ) : (
              <li key={category.name}>
                <Link to={category.path} className="hover:text-gray-400">
                  {category.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-4">
          <ul className="flex flex-col gap-4 bg-gray-800 p-4 rounded">
            {categories.map((category) =>
              category.links ? (
                <li key={category.name}>
                  <details>
                    <summary className="cursor-pointer text-white">{category.name}</summary>
                    <ul className="ml-4 mt-2 space-y-2">
                      {category.links.map((link) => (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            className="text-gray-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={category.name}>
                  <Link
                    to={category.path}
                    className="hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
