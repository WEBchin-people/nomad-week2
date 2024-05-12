const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
  event.preventDefault(); // 새로고침 방지
  loginForm.classList.add(HIDDEN_CLASSNAME); // form 숨기기
  const username = loginInput.value; 
  localStorage.setItem(USERNAME_KEY, username); // value 저장
  paintGreetings(username);
}
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} // 맨 처음에는 savedUsername이 없기 때문에 Null이라서 실행됨
else {
  paintGreetings(savedUsername);
}
