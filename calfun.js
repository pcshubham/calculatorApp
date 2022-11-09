function add()
{
    var num1 = parseInt(document.getElementById("tb1").value)
    var num2 = parseInt(document.getElementById("tb2").value)
    var addition = num1+num2
    document.getElementById("tb3").value = addition

}

function sub()
{
    var num1 = parseInt(document.getElementById("tb1").value)
    var num2 = parseInt(document.getElementById("tb2").value)
    var sub1 = num1-num2
    document.getElementById("tb3").value = sub1

}
function mul()
{
    var num1 = parseInt(document.getElementById("tb1").value)
    var num2 = parseInt(document.getElementById("tb2").value)
    var mul1 = num1*num2
    document.getElementById("tb3").value = mul1

}
function divi()
{
    var num1 = parseInt(document.getElementById("tb1").value)
    var num2 = parseInt(document.getElementById("tb2").value)
    var divi1 = num1/num2
    document.getElementById("tb3").value = divi1

}

function clr()
{
    document.getElementById("tb1").value =""
    document.getElementById("tb2").value =""
    document.getElementById("tb3").value =""

}


