function checkMe()
{
    var cb = document.getElementById("year11");
    var text = document.getElementById("21months");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
function checkMe2()
{
    var cb = document.getElementById("year12");
    var text = document.getElementById("22months");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
function checkMe3()
{
    var cb = document.getElementById("year13");
    var text = document.getElementById("23months");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function checkMe1MonthJanApril()
{
    var cb = document.getElementById("janApr21");
    var text = document.getElementById("2021JanApr");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function checkMe2MonthJanApril()
{
    var cb = document.getElementById("janApr22");
    var text = document.getElementById("2022JanApr");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function checkMe3MonthJanApril()
{
    var cb = document.getElementById("janApr23");
    var text = document.getElementById("2023JanApr");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function checkMe1MonthMayAug()
{
    var cb = document.getElementById("mayAug21");
    var text = document.getElementById("2021MayAug");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function checkMe2MonthMayAug()
{
    var cb = document.getElementById("mayAug22");
    var text = document.getElementById("2022MayAug");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function checkMe3MonthMayAug()
{
    var cb = document.getElementById("mayAug23");
    var text = document.getElementById("2023MayAug");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


function checkMe1MonthSeptDec()
{
    var cb = document.getElementById("septDec21");
    var text = document.getElementById("2021SeptDec");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function checkMe2MonthSeptDec()
{
    var cb = document.getElementById("septDec22");
    var text = document.getElementById("2022SeptDec");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function checkMe3MonthSeptDec()
{
    var cb = document.getElementById("septDec23");
    var text = document.getElementById("2023SeptDec");

    if (cb.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function calculate()
{
    var value1 = number + 100;
    var value2 = number - 100;
    var value = value1-value2+1;
    let assign = Math.random() * value;
    let result = Math.floor(assign) + min;

    var number1 = document.getElementsByClassName("Jan");
    number1.number.value = result;
}

function reset()
{
   document.getElementsByClassName("Jan").value = 0;
}