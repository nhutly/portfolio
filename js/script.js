window.onload = function countStats() {
    if (typeof(Storage) !== "undefined") {

        if (localStorage.viewcount) {
            localStorage.viewcount = Number(localStorage.viewcount) + 1;
        } else {
            localStorage.viewcount = 1;
        }
        document.getElementById("view-caption").innerHTML = localStorage.viewcount + " Views";

        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount);
        } else {
            localStorage.clickcount = 0;
        }
        if (localStorage.clickcount == 0) {
            document.getElementById("like-caption").innerHTML = localStorage.clickcount + " Like";
        } else {
            document.getElementById("like-caption").innerHTML = localStorage.clickcount + " Likes";
        }



        if (localStorage.lovecount) {
            localStorage.lovecount = Number(localStorage.lovecount);
        } else {
            localStorage.lovecount = 0;
        }
        if (localStorage.lovecount == 0) {
            document.getElementById("love-caption").innerHTML = localStorage.lovecount + " Love";
        } else {
            document.getElementById("love-caption").innerHTML = localStorage.lovecount + " Loves";
        }

    } else {
        document.getElementById("view-caption").innerHTML = "Sorry, your browser does not support web storage...";
        document.getElementById("like-caption").innerHTML = "Sorry, your browser does not support web storage...";
        document.getElementById("love-caption").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function countLikes() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("like-caption").innerHTML = localStorage.clickcount + " Likes";
    } else {
        document.getElementById("like-caption").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function countLoves() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.lovecount) {
            localStorage.lovecount = Number(localStorage.lovecount) + 1;
        } else {
            localStorage.lovecount = 1;
        }
        document.getElementById("love-caption").innerHTML = localStorage.lovecount + " Views";
    } else {
        document.getElementById("love-caption").innerHTML = "Sorry, your browser does not support web storage...";
    }
}