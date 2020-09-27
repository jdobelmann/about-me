function add() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("answer").innerHTML = num1+num2;
}

function sub() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("answer").innerHTML = num1-num2;
}

function mult() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("answer").innerHTML = num1*num2;
}

function div() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    // Check to see if we're dividing by zero
    if (num2 == 0) {
	window.location.href = "https://www.youtube.com/watch?v=aK0hXR_XbH8";
    }
    else {
	document.getElementById("answer").innerHTML = num1/num2;
    }
}
