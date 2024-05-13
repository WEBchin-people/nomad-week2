const clock = document.querySelector("h2#clock"); //querySelector("#clock") 또는 getElementById("clock")

function getClock(){
    const date = new Date();
    const hours =  string(date.getHours().padStart(2, "0"));
    const minutes = string(date.getMinutes().padStart(2, "0"));
    const seconds = string(date.getSeconds().padStart(2, "0"));
    clock.innerText = (`${hours()}:${minutes()}:${seconds()}`); //'이 아니라 `(백틱)!
}

getClock()
setInterval(getClock, 1000);
