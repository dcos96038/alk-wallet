import React, { useEffect, useState } from "react";

// Props:
// values: lista de valores que aparecen en el menu
// returnValue: debe ser una funcion que recupere el avlor de la opcion seleccionada

const Dropdown = ({
  values = ["option 1", "option 2", "option 3"],
  returnValue = console.log,
  className = "",
}) => {
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState(values[0]);
  const handleSelect = (index) => {
    setSelect(values[index]);
    setToggle(false);
    returnValue(values[index]);
  };

  useEffect(() => {
    returnValue(values[0]);
  }, []);

  return (
    <div className={className} style={{ height: "40px" }}>
      <button
        className="float-none border-0 text-white bg-zinc-800 focus:bg-accent font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setToggle(!toggle)}
      >
        {select}
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`${
          toggle ? "" : "hidden"
        } z-10 w-max bg-zinc-800 rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
        style={{
          position: "relative",
          inset: "0px auto auto 0px",
          margin: "0px",
          transform: "translate(0px, 10px)",
        }}
      >
        <ul className="py-1 text-sm text-gray-700">
          {values[0] &&
            values.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    onClick={() => handleSelect(index)}
                    className="text-gray-50 block py-2 px-4 no-underline cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
