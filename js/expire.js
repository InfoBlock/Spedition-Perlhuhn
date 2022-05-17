var expireDate = new Date("March 21, 2023 23:59:59").getTime();

var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = expireDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft & (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("expireCountdown").innerHTML = "Domain läuft ab in<br><br>" + days + " Tag(en)<br>" + hours + " Stunde(n)<br>" + minutes + " Minute(n)<br>" + seconds + " Sekunde(n)";

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("expireCountdown").innerHTML = "Die Domain ist abgelaufen!";
    }
}, 1000);
