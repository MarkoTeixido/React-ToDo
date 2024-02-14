import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoSearch(){
  const {
    searchValue,
    setSearchValue,
  } = useContext(TodoContext);

  return (
      <input className="self-center text-slate-950 px-1 rounded-sm h-9 sm:w-80 " 
      placeholder="Buscar tarea..." 
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}></input>
  );
}

export { TodoSearch }; 