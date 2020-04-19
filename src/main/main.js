function createPlaceholder() {
  const placeholder = document.createElement("span");
  placeholder.classList.add("placeholder");
  placeholder.append("Just start typing...");
  
  return placeholder;
}

const editables = document.querySelectorAll(".editable");

editables.forEach((editable, index) => {
  // TODO: set focus on the last edited element
  if (index === 0) {
    editable.focus();
  }
});
