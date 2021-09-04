const todoForm = document.querySelector(".form_todo");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#list_todo");

let todoArr = [];

const CLASSNAME_BUTTON_STYLE = "buttonStyle";
const CLASSNAME_LIST_DONE = "listDone";
const KEYNAME_TODOS = "todos";

// //////////////////////////////////////////////////////////////////////

function handleTodoSubmit(event) {
   event.preventDefault();

   const contentOfTodo = todoInput.value;
   todoInput.value = "";

   const contentOfTodoObj = {
      id: Date.now(),
      text: contentOfTodo,
      done: false
   };

   todoArr.push(contentOfTodoObj);
   todoArr = sortByDone(todoArr);
   paintTodo(contentOfTodoObj);
   saveTodo();
}

function saveTodo() {
   localStorage.setItem(KEYNAME_TODOS, JSON.stringify(todoArr));
}

function paintTodo(obj) {
   const li = document.createElement("li");
   const spanInli = document.createElement("span");
   const spanInDoneBtn = document.createElement("span");
   const spanInDelBtn = document.createElement("span");
   const buttonDelete = document.createElement("button");
   const buttonDone = document.createElement("button");

   li.appendChild(spanInli);
   li.appendChild(buttonDone);
   li.appendChild(buttonDelete);
   buttonDone.appendChild(spanInDoneBtn);
   buttonDelete.appendChild(spanInDelBtn);

   li.id = obj.id;
   spanInli.innerText = obj.text;
   buttonDone.innerText = "Done";
   buttonDelete.innerText = "Delete";
   buttonDone.classList.add(CLASSNAME_BUTTON_STYLE);
   buttonDelete.classList.add(CLASSNAME_BUTTON_STYLE);

   if (obj.done === true) {
      li.classList.add(CLASSNAME_LIST_DONE);
   } else {
      li.classList.remove(CLASSNAME_LIST_DONE);
   }

   buttonDone.addEventListener("click", doneTodoListElement);
   buttonDelete.addEventListener("click", deleteTodoListElement);

   todoList.appendChild(li);
   //todoList.insertBefore(li, todoList.firstChild);
}

function deleteTodoListElement(event) {

   // event의 target 정보로 버튼이 클릭된 li를 식별할 수 있다.
   // console.dir(event.target);

   const target = event.target.parentElement;
   const targetID = parseInt(target.id);

   todoList.removeChild(target);
   // = target.remove();

   todoArr = todoArr.filter(e => e.id !== targetID);

   saveTodo();
}
function doneTodoListElement(event) {

   const target = event.target.parentElement;
   const targetID = parseInt(target.id);

   todoArr.forEach(e => {
      if (e.id === targetID) {
         if (e.done === true) {
            e.done = false;
            target.classList.remove(CLASSNAME_LIST_DONE);

            todoArr = todoArr.filter(ele => ele !== e);
            todoArr.unshift(e);
         } else {
            e.done = true;
            target.classList.add(CLASSNAME_LIST_DONE);

            todoArr = todoArr.filter(ele => ele !== e);
            todoArr.push(e);
         }
      }
   });

   saveTodo();
}

function sortByDone(arr) {
   arr.forEach(e => {
      if (e.done === true) {
         arr = arr.filter(ele => ele !== e);
         arr.push(e);
      }
   })

   return arr;
}


todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(KEYNAME_TODOS);

if (savedTodos) {
   const parsedTodos = JSON.parse(savedTodos);

   // localStorage에 있던 기존 값들을 arr에 저장
   //todoArr = parsedTodos;
   todoArr = sortByDone(parsedTodos);
   parsedTodos.forEach(paintTodo);
}