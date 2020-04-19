export default (key) => {
  let value = localStorage.getItem(key);
  
  return value ? JSON.parse(value) : undefined;
}