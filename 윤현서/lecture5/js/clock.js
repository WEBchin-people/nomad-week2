const clock = document.querySelector("h2#clock");

// interval : '매번' 일어나야하는 무언가
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock() //일단 켜자마자 바로 한 번 실행하고 싶어서 적음
setInterval(getClock, 1000/*ms*/); // 1초마다 getClock 실행
// setTimeout(getClock, 5000/*ms*/); // 5초 후에 getClock 한 번 실행

//1을 출력하는데 2의 길이를 가지고 있지 않다면 앞에 0 추가하기
"1".padStart(2, "0"); 
"12".padStart(2, "0");