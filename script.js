function compute()
{
    //Captures value for principal Amount entered
    var principal = document.getElementById("principal").value;

    //Error trapping for principal value
    if (principal <= 0){
      alert("Principal amount must be greater than 0.");
      principal.focus();
    }

    //Capture values for Interest Rate and No. of Years
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Computes interest earned
    var interest = principal * years * rate / 100;

    //Computes the year that the interest will accrue
    var year = new Date().getFullYear()+parseInt(years);

    //Returns computed interest amount as text output
    document.getElementById("result").innerHTML="If you deposit "+principal+"\<br\>at an interest rate of "+rate+"%,\<br\>you will receive an amount of "+interest.toFixed(2)+"\<br\>in the year "+year+".\<br\>"
}

function updateRate()
{
  //Updates the interest rate slider
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText=rateval;
}
