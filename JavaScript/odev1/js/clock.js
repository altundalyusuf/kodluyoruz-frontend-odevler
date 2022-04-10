let name = prompt("Adınızı Giriniz: ")
let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")

myName.innerHTML = name

function showTime() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    var turkish_days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let days = turkish_days[date.getDay()];

    myClock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + days;
    setTimeout(showTime, 1000);
}
showTime()



