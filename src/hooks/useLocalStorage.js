import { useState } from 'react';

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem('TODOS_V1', JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveitem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    
    setItem(newItem);
  };

  return [item, saveitem];
}

export { useLocalStorage };