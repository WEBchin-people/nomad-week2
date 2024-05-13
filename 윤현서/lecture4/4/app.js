const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string만 포함된 변수는 대문자로 표기
const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

function onLoginSubmit(event){/* 엔터나 버튼을 누를 때 발생 */
    event.preventDefault(); //event의 기본 행동이든지 발생되지 않도록 막음, 새로고침 X
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // console.log("username");

    paintGreetings(username);
        // //string 안에서 변수 사용하기. text 합치기
        // greeting.innerText = "Hello " + username; // 방법 1 
        // greeting.innerText = `Hello ${username}`; // 방법 2 (좀 더 새로운 방식) 
        // // ``백틱으로 시작해야함
        // // ${변수명}
    
        // /* h1 드러내기 */
        // greeting.classList.remove(HIDDEN_CLASSNAME); 

    /* localStorage로 브라우저에 값 저장하기. 추후에 가져다쓰기 가능 */
    //https://youtu.be/I7JiDXNnacc?t=262
    localStorage.setItem(USERNAME_KEY, username);
}

// loginForm.addEventListener("submit", onLoginSubmit);

/* username이 저장되어있지 않으면 form 띄우기. 아니라면 greeting 띄우기 */
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greeting
    paintGreetings(savedUsername);
}