const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked"; //수정 시 실수를 줄이기 위해 변수 사용

    /* class 이름을 변경해서 구현하기 */
    // if(h1.className === "clickedClass") {
    //     h1.className = "";
    // } else {
    //     h1.className = "clickedClass";
    // }
    // -> 버그 : 기존 클래스를 잃게 됨 

    /* class list로 구현하기 */
    // if (h1.classList.contains(clickedClass)) { /* class list가 clicked class를 포함하는가? */
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass); //특정 class만 조작하기
    // }

    /* toggle로 구현하기 (class list로 구현한 코드와 완벽히 같음) */
    h1.classList.toggle("clicked"); 
}

h1.addEventListener("click", handleTitleClick);