const logInForm = document.querySelector(".form_login");
const logInInput = logInForm.querySelector("input");
const logInBtn = logInForm.querySelector("button");
const linkToNomad = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden";
const LOCALSTORAGE_KEY = "username";

const savedUsername = localStorage.getItem(LOCALSTORAGE_KEY);

if (savedUsername) {
   printGreeting();
} else {
   logInForm.classList.remove(CLASSNAME_HIDDEN);
   logInForm.addEventListener('submit', handleLogInForm);
}

function handleLogInForm(event) {
   // preventDefault()는 이벤트의 기본 동작을 막아주는 역할
   // submit의 기본 동작은 페이지 새로고침이다.
   // 따라서, submit시 페이지가 새로고침 되는 것을 막아주고 있다.
   event.preventDefault();

   const userName = logInInput.value;
   localStorage.setItem(LOCALSTORAGE_KEY, userName);
   logInForm.classList.add(CLASSNAME_HIDDEN);

   printGreeting();
}

function printGreeting() {
   const name = localStorage.getItem(LOCALSTORAGE_KEY);
   greeting.innerText = `Hello, ${name}!`;
   // = greeting.innerText = "Hello, " + name + "!";
   greeting.classList.remove(CLASSNAME_HIDDEN);
}

// linkToNomad.addEventListener('click', handleLinkToNomadClick);
// function handleLinkToNomadClick(event) {
//    event.preventDefault();
//    alert("You cannot pass here !!!");
// }

// logInBtn.addEventListener('click', handleLogInBtnClick);
// function handleLogInBtnClick() {
//    const inputValue = logInInput.value;

//    // input 태그 안의 required, max-length 속성으로 대체할 수 있는  코드
//    // if (!inputValue) {
//    //    alert("plz input your name");
//    //    return;
//    // }
//    // if (inputValue.length < 5) {
//    //    alert("plz input characters more than 5");
//    //    return;
//    // } else if (inputValue.length >= 11) {
//    //    alert("plz input characters less than 11");
//    //    return;
//    // }

//    console.log(inputValue);
// }