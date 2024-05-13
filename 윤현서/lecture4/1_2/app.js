// /* 방법 1 : loginForm에서 찾기 */
// const loginForm = document.getElementById("login-form"); 
// //id를 찾고 있는 걸 알고 있으므로 # 안 써도 됨
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
/* 방법 2 : document에서 찾기 */
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     // console.dir(loginInput);
//     // console.log(loginInput.value);

//     const username = loginInput.value;
//     // if (username === "") {
//     //     alert("Please write your name");
//     // } else if(username.length > 15) { //길이로 조건 비교
//     //     alert("your name is too long.")
//     // } 
//     // -> html form에서 구현 가능

//     console.log(username);
// }

// loginButton.addEventListener("click", onLoginBtnClick);

function onLoginSubmit(tomato){/* 엔터나 버튼을 누를 때 발생 */
/*하나의 argument를 받도록해서 가져 옴 */
    tomato.preventDefault(); //event의 기본 행동이든지 발생되지 않도록 막음, 새로고침 X
    console.log(tomato);
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

// onLoginSubmit({information about the event that just happened}) 형태로 JS가 가져오게 됨