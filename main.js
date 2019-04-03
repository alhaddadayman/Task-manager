let addToDo = document.getElementById("firstDiv");
let buttonAdd = document.getElementById("butId");
buttonAdd.addEventListener("click", addTask);

function addTask(e) {
  let fieldTitle, fieldTask, fieldDate;

  fieldTitle = document.getElementById("titleId").value;
  fieldTask = document.getElementById("taskId").value;
  fieldDate = document.getElementById("dateId").value;

  let newTitle = document.createElement("h4");
  newTitle.className = "card-title";
  let textTitle = document.createTextNode(fieldTitle);
  newTitle.appendChild(textTitle);

  let newLine = document.createElement("hr");

  let newTask = document.createElement("p");
  newTask.className = "card-text";
  let textTask = document.createTextNode(fieldTask);
  newTask.appendChild(textTask);

  let newDate = document.createElement("span");
  let textDate = document.createTextNode(fieldDate);
  newDate.appendChild(textDate);

  let newDelete = document.createElement("button");
  newDelete.className = "fas fa-trash delete m-2 btn btn-danger";

  let newCheck = document.createElement("button");
  newCheck.className = "fas fa-check-square done m-2 btn btn-info  ";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.appendChild(newTitle);
  cardBody.appendChild(newLine);
  cardBody.appendChild(newTask);

  let cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";
  cardFooter.appendChild(newDate);
  cardFooter.appendChild(newDelete);
  cardFooter.appendChild(newCheck);

  let newCard = document.createElement("div");
  newCard.className = "card h-100";
  newCard.appendChild(cardBody);
  newCard.appendChild(cardFooter);

  let newStyle = document.createElement("div");
  newStyle.className = " col-lg-3 col-md-6 mb-4 text-center";
  newStyle.title = "Drag and Drop"
  newStyle.appendChild(newCard);

  let firstDiv = document.getElementById("firstDiv");
  firstDiv.appendChild(newStyle);

  var taskArray = [];
  var taskObj = { title: fieldTitle, task: fieldTask, data: fieldDate };
  taskArray.push(taskObj);

  console.log(taskArray);
  localStorage.taskList = JSON.stringify(taskArray);
}

firstDiv.addEventListener("click", removeItem);
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    let con = confirm("Do you want to delete this Task ?");
    if (con === true) {
      firstDiv.removeChild(e.target.parentElement.parentElement.parentElement);
    }
  }
}
firstDiv.addEventListener("click", check);
function check(e) {
  if (e.target.classList.contains("done")) {
    e.target.parentElement.parentElement.style.color = "white";
    e.target.parentElement.parentElement.style.backgroundColor = "rgba(46, 46, 46, 0.267)";
    e.target.parentElement.parentElement.style.textDecoration = "line-through";
    e.target.parentElement.parentElement.style.border = "1px solid white";
  }
}

$(function() {
  $("#firstDiv").sortable();
  $("#firstDiv").disableSelection();
});
