
function compute()
{
    if(principal.value < 1){
        alert("Debes ingresar un valor")
        principal.focus()
        return
    }
    let interest = principal.value * years.value * rate.value / 100;
    yearInFuture = new Date().getFullYear() + parseInt(years.value);
    result = document.getElementById("result")
    result.innerHTML = "<p>si depositas <mark>"+ principal.value +"</mark>,<br>una tasa de interés de <mark>" + rate.value + "%</mark>.<br>Recibirás una cantidad de <mark>"+interest+"</mark>,<br>en el año <mark>"+yearInFuture+"</mark></p>";

}

function refreshSlider(){
rate.value
document.getElementById("rateLabel").innerText = rate.value + "%"}

finishPage = () =>{
    var rate = document.getElementById("rate");
    var principal = document.getElementById("principal");
    var years = document.getElementById("years");
    years = document.getElementById("years");
    for(i=1; i<=10; i++){
    	let element = document.createElement("option")
    	element.innerText = i
    	element.setAttribute("value", i)
    	years.appendChild(element)
    }
}
