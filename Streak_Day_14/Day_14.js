var todoList = [];

document.getElementById("todo-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var todoInput = document.getElementById("todo-input").value;
  todoList.push(todoInput);
  document.getElementById("todo-input").value = "";
});

function getTodoList() {
  var output = "";
  for (var i = 0; i < todoList.length; i++) {
    output += (i + 1) + ". " + todoList[i] + "<br>";
  }
  document.getElementById("output").innerHTML = output;
}
