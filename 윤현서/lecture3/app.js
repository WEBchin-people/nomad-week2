/*
*   🚩 3-0      
*   ✨Document Obj✨
*   html문서의 내용을 js로 가져오기
*   
*/
// console.dir(document)    // html document를 가져옴
// document.title_h1           //문서 제목 확인
// document.body            //특정 태그만 가져올 수도 있음
// document.title_h1 = "Hi"    //문서 제목 변경도 가능!




/*
*   🚩 3-1       
*   ✨✨HTML in JS✨✨
*   아주 자주 쓰이는 개념임
*/

// // id로 가져오기
// const title_h1 = document.getElementById("title_h1") 
// // console.log(title_h1);
// console.dir(title_h1); //dir을 열어서 뭘 가져올 수 있는지 확인 가능. 진짜 많음!

// //h1 내부text 변경
// title_h1.innerText = "Got you!";

// console.log(title_h1.id);
// console.log(title_h1.className);




/*
*   🚩3-2         
*   ✨Searching For Elements✨
*   
*/

//class name으로 가져오기
const hellos = document.getElementsByClassName("hello");
//array로 한번에 가져오므로 xx.xx 형태로 가져올 수 없음.
console.log(hellos);

//tag name으로 가져오기
const title_name = document.getElementsByTagName("h1");
console.log(title_name);

//🍀 주관적으로 제일 멋진 방법들 🍀
//1. querySelector
//      element를 CSS 방식으로 검색 가능(=class 내부에 있는 h1을 검색가능)
//      조건에 해당하는 태그들 중 맨 처음 태그만 가져옴!!
//      .hello h1:first-child << 이런 selector도 넣을 수 있다는 말
const titleQS = document.querySelector(".hello h1");
console.log(titleQS);
//2. querySelectorAll 
//      조건에 해당하는 태그들 다 가져옴!!!
const titleQSA = document.querySelectorAll(".hello h1");
console.log(titleQSA);



/*
*   🚩3-3, 3-4
*   ✨Events✨   
*   events : dir에서 on으로 시작하는 것들, 인식할 모든 동작들
*/

// 1. element 찾기
// 2. event listen 하기
// 3. event에 반응하기

//1
const title_h1 = document.querySelector("div.hello:first-child h1");
console.log(title_h1);

//3
function handleTitleClick(){
    // console.log(title_h1.style.color);
    // console.log("title_h1 was clicked!");
    // title_h1.style.color = "pink";
    // console.log(title_h1.style.color);

    /* 3-6 */
    const currentColor = title_h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    title_h1.style.color = newColor;
}
//2. listen해서 동작 수행
//작성법 1 (선호)
title_h1.addEventListener("click", handleTitleClick/* 괄호 안 씀. 대신 실행하므로 */);
//작성법 2
// title_h1.onclick = handleTitleClick;


// function handleMouseEnter(){
//     console.log("mouse is here");
//     title_h1.innerText = "Mouse is here!";
// }
// title_h1.addEventListener("mouseenter", handleMouseEnter);

// function handleMouseLeave(){
//     title_h1.innerText = "Mouse is gone!";
// }
// title_h1.addEventListener("mouseleave", handleMouseLeave);



//listen하고 싶은 이벤트 찾는 법
// 1.검색
// ex : h1 html element mdn에서 Web APIs 가 제목에 있는 사이트 들어가기
// mdn 뜻 : Mozilla Developer Network
// 2. console.dir() 머시기 하기

/*
*   🚩3-5
*   ✨More Events✨   
*   on으로 시작하는 것들, 모든 동작들
*/

// function handleWindowResize(){/* 창 크기 조절 > 배경색 토마토 */
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){/* 복사 > 알람 */
//     alert("copier!");
// }

// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }

// function handleWindowOnline(){
//     alert("ALL GOOOOD!");
// }

// window.addEventListener("resize", handleWindowResize);  
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline)
// window.addEventListener("online", handleWindowOnline);

/*
*   🚩3-6
*   ✨CSS in Javascript✨   
*/

//위 코드에 추가했음!