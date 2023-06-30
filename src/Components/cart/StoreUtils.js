import store from "store";

export const saveDataToLocalStorage = (key, data) => {
  store.set(key, data);
};

export const getDataFromLocalStorage = (key) => {
  return store.get(key);
};

export const removeDataFromLocalStorage = (key) => {
  store.remove(key);
};
