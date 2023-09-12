document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTaskDescriptionInput = document.getElementById("new-task-description");
    const newTaskDescription = newTaskDescriptionInput.value;
    makeTask(newTaskDescription);
    form.reset();
  });
});

function makeTask(insertTask){
  let makeLi = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", closeTask);
  makeLi.textContent = `${insertTask} `;
  btn.textContent = "X";
  makeLi.appendChild(btn);
  console.log(makeLi);
  document.getElementById("tasks").append(makeLi);
}

function closeTask(e){
  e.target.parentNode.remove();
}