function compute() {
    // get values
    var principal = validatePrincipal();
    if (isNaN(principal) || principal <= 0) {
        console.error("not a valid number.");
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // compute stuff
    var interest = (principal * rate * years) / 100; // the interest
    var year = new Date().getFullYear() + parseInt(years); // the future year

    // output stuff
    var result = document.getElementById("result");
    var outputString = `If you deposit <mark>${principal}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>.<br>
    You will receive an amount of <mark>${interest}</mark>,<br>
    in the year <mark>${year}</mark>`;
    result.innerHTML = outputString;
}

function updateRate() {
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML =
        rateVal + (parseInt(rateVal) == parseFloat(rateVal) ? ".00%" : "%");
}

function validatePrincipal() {
    var value = document.getElementById("principal");
    var converted = parseInt(value.value);
    if (isNaN(converted)) {
        alert("Please enter a valid number using digits");
        value.focus();
    } else if (converted <= 0) {
        alert("Enter a positive number");
        value.focus();
    }
    value.focus();
    document.getElementById("principal").focus();
    return converted;
}
