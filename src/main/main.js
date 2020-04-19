import getFromLocalStorage from "../../lib/get-from-local-storage";

const editables = document.querySelectorAll(".editable");
const savedContent = getFromLocalStorage("editable-content");
const content = savedContent || {};

editables.forEach((editable, index) => {
  // TODO: set focus on the last edited element
  if (index === 0) {
    editable.focus();
  }
  
  if (savedContent[editable.id]) {
    editable.innerHTML = savedContent[editable.id];
  }
  
  editable.addEventListener("input", (event) => {
    const newValue = event.target.innerHTML;
    content[editable.id] = newValue;
    
    localStorage.setItem("editable-content", JSON.stringify(content));
  });
});
