function init() {
    document.onkeydown = function (event) {
        var holder;
        if (window.event) {
            holder = window.event.keyCode;
        }
        else {
            holder = event.which;
        }
        changeDivColor(holder);
    }
}

function changeDivColor(key) {
    if (key === 87 ) {
        document.getElementById("square1").style.background="red";
    } else if (key == 83) {
        document.getElementById("square1").style.background="green";
    }

    if (key === 69 ) {
        document.getElementById("square2").style.background="purple";
    } else if (key == 68) {
        document.getElementById("square2").style.background="pink";
    }


}

init();

