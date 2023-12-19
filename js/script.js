function toggleClasses() {
    var letter = document.getElementById('letter');
    var vid = document.getElementById('vid');

    letter.classList.toggle("active");
    vid.classList.toggle("active");

    var videoElement = vid.querySelector('audio');
    if (!vid.classList.contains("active") && videoElement) {
        videoElement.pause();
    }
}

// scroll screen 
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop >= 640) {
            if (scrollTop < lastScrollTop) {
                navbar.classList.remove("fixed");
            } else {
                navbar.classList.add("fixed");
            }
        } else {
            navbar.classList.remove("fixed");
        }

    });
});

// Links of pdf files
function openPDF1() {
    window.open("https://drive.google.com/file/d/1DaDyGtvSUIbWKqTzUg07Akh5TiN0QRb5/view?usp=drive_link", "_self");
}
function openPDF2() {
    window.open("https://drive.google.com/file/d/1bhN5ET7ki5FZkr9kHgez4k9hSAcGLlzF/view?usp=drive_link", "_self");
}
function openPDF3() {
    window.open("https://drive.google.com/file/d/1UqZCzCHIC7pXYQPtanO5lruRROR8LOyv/view?usp=drive_link", "_self");
}

// Instructions section
function toggleExpand(element) {
    var icon = element.querySelector('i');
    var expandBox = element.nextElementSibling;

    if (expandBox.style.display === "none" || expandBox.style.display === "") {
        expandBox.style.display = "flex";
        icon.classList.add('active');
    } else {
        expandBox.style.display = "none";
        icon.classList.remove('active');
    }

}

// Questions Section
function expandQuestions(element1) {
    var ans = element1.querySelector('p');

    if (ans.style.display === "none" || ans.style.display === "") {
        ans.style.display = "flex";
    } else {
        ans.style.display = "none";
    }

}

// Navgiation bar
document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuButton = document.getElementById('mobile-menu');
    var navMenu = document.querySelector('nav ul');
    mobileMenuButton.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});

//BGM
document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('customAudio');
    audio.volume = 0.02;
    audio.style.display = 'none';
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'm') {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    });
    audio.play();
});