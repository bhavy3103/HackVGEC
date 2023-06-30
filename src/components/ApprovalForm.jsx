import { useState } from "react";
import CpiUpdate from "./forms/CpiUpdate";
import AddAchievement from "./forms/AddAchievement";
import AddExperience from "./forms/AddExperience";
import AddProject from "./forms/AddProject";

const types = [
  "Add Project",
  "Add Achievement",
  "Add Experience",
  "Update SPI",
];

const currComponent = [
  <AddProject />,
  <AddAchievement />,
  <AddExperience />,
  <CpiUpdate />,
];

export default function ApprovalForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(-1);
  return (
    <div className="">
      <div className="mx-auto max-w-3xl py-6 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <button
          className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center flex justify-between space"
          style={{ width: "200px" }}
          onClick={() => {
            setIsOpen((prev) => !prev);
            console.log(isOpen);
          }}
        >
          <span className="mr-1">
            {type !== -1 ? types[type] : "Select Option"}
          </span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        {isOpen && (
          <ul
            className="dropdown-menu text-gray-700 pt-1"
            style={{ width: "200px" }}
            id="dd-menu"
          >
            <li
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
              onClick={() => {
                setType(0);
                setIsOpen(false);
              }}
            >
              {types[0]}
            </li>
            <li
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
              onClick={() => {
                setType(1);
                setIsOpen(false);
              }}
            >
              {types[1]}
            </li>
            <li
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
              onClick={() => {
                setType(2);
                setIsOpen(false);
              }}
            >
              {types[2]}
            </li>
            <li
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
              onClick={() => {
                setType(3);
                setIsOpen(false);
              }}
            >
              {types[3]}
            </li>
          </ul>
        )}
      </div>
      {type !== -1 && (
        <div className="mx-auto max-w-3xl py-6 sm:px-6 lg:px-8 bg-gray-300">
          {currComponent[type]}
        </div>
      )}
    </div>
  );
}
