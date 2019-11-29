function showTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(showTime, 500); 
}

function countDown() {
    let endDate = new Date("2020-01-01");
    let today = new Date();

    let difference = endDate.getTime() - today.getTime();

    let timer = new Date(difference);
    let day = ((difference) / (86400000)).toFixed(0),
        h = checkTime(timer.getHours()),
        m = checkTime(timer.getMinutes()),
        s = checkTime(timer.getSeconds());

    document.getElementById('countdown').innerHTML = 
    `${day}:${h}:${m}:${s}`;
    var t = setTimeout(countDown, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }