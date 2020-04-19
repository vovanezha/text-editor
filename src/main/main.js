import getFromLocalStorage from "../../lib/get-from-local-storage";
import onKey from "../../lib/on-key";

function attachEventListeners(element) {
  element.addEventListener("input", (event) => {
    if (!element.id) {
      return;
    }
    
    content[element.id] = event.target.innerHTML;
    localStorage.setItem("editable-content", JSON.stringify(content));
  });
  
  onKey(element, {
    Enter(event) {
      event.preventDefault();
      
      const editable = createEditable();
      element.after(editable);
      editable.focus();
    },
  });
}

function createEditable() {
  const editable = document.createElement("div");
  editable.setAttribute("id", id++);
  editable.setAttribute("contenteditable", "true");
  editable.classList.add("editable");
  
  attachEventListeners(editable);
  
  return editable;
}

const editables = document.querySelectorAll(".editable");
const savedContent = getFromLocalStorage("editable-content") || {};
const content = savedContent;
let id = 1;

editables.forEach((editable, index) => {
  // TODO: set focus on the last edited element
  if (index === 0) {
    editable.focus();
  }
  
  if (savedContent[editable.id]) {
    editable.innerHTML = savedContent[editable.id];
  }
  
  attachEventListeners(editable);
});
