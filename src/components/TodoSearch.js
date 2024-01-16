function TodoSearch({searchValue, setSearchValue}){
    return (
        <input className="self-center text-slate-950 px-1 rounded-sm h-9 sm:w-80 " 
        placeholder="Tarea..." 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}></input>
    );
}

export { TodoSearch }; 