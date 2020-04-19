export default (element, keyes) => {
  element.addEventListener("keydown", (event) => {
    if (keyes[event.code]) {
      keyes[event.code](event);
    }
  });
}