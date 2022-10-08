function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //store calculated interest
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    // validate amount field, then return reults
    if (principal < 1) {
        document.getElementById("principal").focus()
        alert("Enter a positive number");
    } else {
        document.getElementById("result").innerHTML = "If you deposit " + principal +
            ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>"
    }


};
//text value update for slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

