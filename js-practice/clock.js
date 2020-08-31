const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"),
    btn = document.querySelector(".btn");

    var clear;

function changeFormat(event){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const ampm = (hours >= 12) ? "PM" : "AM";
    hours = (hours == 0) ? 12 : ((hours > 12) ? (hours - 12): hours);

    clockTitle.innerText = `${ampm} ${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10? `0${seconds}` : seconds}`
    setInterval(changeFormat, 1000);
}

 function getTime(){
    // const로 변수 선언시 changeFomat 함수에서 재사용할 수 없기 떄문에 let으로 변경
    let date = new Date();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let seconds = date.getSeconds();

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`

    clear = setInterval(getTime, 1000);
    // setInterval(getTime, 1000);
    // 버튼 클릭 이벤트 추가
    // btn.addEventListener("click", changeFormat);
    
 }

function init() {
    getTime();
    btn.addEventListener("click", changeFormat);
}

init();
