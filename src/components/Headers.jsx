"use client";

export const Headers = ({ handleToggleDarkMode }) => {
  return (
    <div className="flex justify-between">
      <div className="font-bold tracking-tight text-xl title-app">Memomate.</div>
      <button
        onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}
        className=" bg-indigo-500 text-white justify-center items-center rounded-full"
      >
        Toggle Mode
      </button>
    </div>
  );
};
