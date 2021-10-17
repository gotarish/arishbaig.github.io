function compute()
{
    var principal = document.getElementById("principal").value;     //get the value of principal
    if (principal<0||principal==0)                                  //make sure that the principal is greater than zero
    {
        alert("Enter a positive number");   //alert if principal<=0
        document.getElementById("principal").focus();
        return false;
    }
var rate = document.getElementById("rate").value;       //get the value of rate
var years = document.getElementById("years").value;     //get the value of years
var interest = principal * years * rate /100;           //calculate the simple interest
var year = new Date().getFullYear()+parseInt(years);    //calculate the year based on number of years entered
document.getElementById("result").innerHTML="&emsp;&emsp;&emsp;If you deposit <mark>"+principal+"</mark><br>&emsp;&emsp;&emsp;at an interest rate of <mark>"+rate+"%.</mark><br>&emsp;&emsp;&emsp;You will receive an amount of <mark>"+interest+"<br></mark>&emsp;&emsp;&emsp;in the year <mark>"+year+"</mark>";         //display the result
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;    //get the rate value beside the range
    document.getElementById("rate_val").innerText=rateval;
}
