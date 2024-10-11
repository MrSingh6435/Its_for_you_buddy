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
    window.open("../media/pdf/Linux_Basics_For_Hackers.pdf", "_self");
}
function openPDF2() {
    window.open("../media/pdf/network-basics-for-hackers.pdf", "_self");
}
function openPDF3() {
    window.open("../media/pdf/Getting-started-becoming-a-master-hacker-hacking-is-the-most-important-skill-set-of-the-21st-century.pdf", "_self");
}

// Instructions section
function toggleExpand(element) {
    var icon = element.querySelector('i');
    var expandBox = element.nextElementSibling; 

    if (icon.classList.contains('active')) {
        // Slide up (collapse)
        expandBox.classList.remove('active');   
        expandBox.classList.add('removing');     
        
        // After the animation ends, hide the element
        setTimeout(() => {
            expandBox.style.display = "none";    
            expandBox.classList.remove('removing'); 
        }, 500); 

        icon.classList.remove('active'); 
    } else {
        // Slide down (expand)
        expandBox.style.display = "flex";        
        expandBox.classList.add('active');       
        
        icon.classList.add('active');            
    }
}



// Questions Section
function expandQuestions(element1) {
    var ans = element1.querySelector('p');
    
    if (ans.classList.contains('active')) {
        ans.classList.remove('active');
        ans.classList.add('removing'); 

        setTimeout(() => {
            ans.style.display = "none"; 
            ans.classList.remove('removing'); 
        }, 500); 
    } else {
        ans.style.display = "block"; 
        ans.classList.add('active'); 
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
    audio.play();
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'm') {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    });
});