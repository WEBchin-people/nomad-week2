const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault(); /* 기본동작 (링크 이동) 막음 */
    console.log(event); /* 클릭한 위치의 마우스 좌표 제공 */
    alert("clicked!"); /*경고창이후*/
}

link.addEventListener("click", handleLinkClick); /* 함수 실행 후 기본 동작 수행 */