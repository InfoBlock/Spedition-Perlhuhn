var timeleft = 10;
var redirectTimer = setInterval(function() {
    timeleft--;
    
    if (timeleft <= 0) {
        clearInterval(redirectTimer);
        document.getElementById("countdownTimer").textContent = "Weiterleitung erfolgt!"
    } else {
        document.getElementById("countdownTimer").textContent = "Weiterleitung in " + timeleft + " Sekunden";
    }
}, 1000)
