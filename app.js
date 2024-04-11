function cl() {
    var date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    var body = document.body;
    if (hour >= 4 && hour < 17) { // Daytime (4 AM to 7 PM)
        body.style.backgroundColor = "#87ceeb"; // Blue sky
        document.getElementById('sun').style.display = 'block';
        document.getElementById('moon').style.display = 'none';
        document.getElementById('sun').style.animation = 'moveSun 100s linear infinite'; // Apply sun animation
        document.getElementById('clock').style.color ="black";
    } else { // Nighttime (7 PM to 4 AM)
        body.style.backgroundColor = "#000000"; // Black sky
        document.getElementById('sun').style.display = 'none';
        document.getElementById('moon').style.display = 'block';
        document.getElementById('moon').style.animation = 'moveMoon 100s linear infinite'; // Apply moon animation
        document.getElementById('clock').style.color = 'white';
        createStars();
    }

    //for AM or PM 
    if (hour < 12) {
        session = "AM";
    } else {
        session = "PM";
    }
    // for hour
    if (hour > 12) {
        hour = "0" + (hour - 12);
    } else if (hour < 12) {
        hour = "0" + hour;
    } else if (hour == 0) {
        hour = 12;
    }
    //for Minute
    if (minute < 10) {
        minute = "0" + minute;
    }
    //for second
    if (second < 10) {
        second = "0" + second;
    }

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second + " " + session;
    setTimeout(cl, 1000);
}
function createStars() {
    var starsContainer = document.getElementById('stars');
    starsContainer.innerHTML = ''; // Clear previous stars

    for (var i = 0; i < 100; i++) {
        var star = document.createElement('div');
        star.classList.add('star');
        var size = Math.random() * 3; // Random star size
        var x = Math.random() * window.innerWidth; // Random horizontal position
        var y = Math.random() * window.innerHeight; // Random vertical position
        var duration = Math.random() * 2 + 1; // Random duration for twinkling effect
        var delay = Math.random() * 5; // Random delay before animation starts
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.animation = 'twinkle ' + duration + 's infinite ' + delay + 's';
        starsContainer.appendChild(star);
    }

    starsContainer.style.display = 'block'; // Show stars
}
