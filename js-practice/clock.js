const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".hours"),
    clockTitle2 = clockContainer.querySelector(".CH_hours"),
    btn = document.querySelector(".btn");

const show = "show",
    hide = "hide";

function changeFormat(event){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const ampm = (hours >= 12) ? "PM" : "AM";

    // 24-hours format hide
    clockTitle.classList.add(hide);

    //hidden 상태인 CH_hours에 show class 추가 , show class는 visibility: visible;
    clockTitle2.classList.add(show);

    // 12-hours format
    hours = (hours == 0) ? 12 : ((hours > 12) ? (hours - 12): hours);
    clockTitle2.innerText = `${ampm} ${hours < 10 ? `0${hours}` : hours}:${
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

    // 현재 CSS visibility: hidden 으로 인해 CH_hours 클래스는 보이지 않음.

    // 버튼 클릭 이벤트 추가
    btn.addEventListener("click", changeFormat);
    
    setInterval(getTime, 1000);
 }

function init() {
    getTime();
}

init();
