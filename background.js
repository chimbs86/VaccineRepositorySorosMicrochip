window.addEventListener ("load", injectSorosMicrochip, false);

startScript = false;


function injectSorosMicrochip (evt) {

setInterval(repeat, 1000);

}

//var event = new CustomEvent("PassToBackground", {detail: "chimbs rocks"});
//window.dispatchEvent(event);

window.addEventListener("PassToBackground", function(evt) {
  
  startScript = startScript?false:true;
}, false);

function repeat(){
	if(startScript){
		console.log("chimbs rocks");
		$("#input-45").click();
		$('.slds-day').next();

	console.log($('button:contains("Today")').click());
  $('.appointment_slot .card-input-element').click();
$('.slds-button.slds-button_brand').click();
setTimeout(() => {  console.log("Waiting"); }, 2000);


}
}

function logger(){
	if(startScript){
	console.log("here");

}

	//
}

function setter(){
	variable = "chimbs rocks";
}


//$('.appointment_slot .card-input-element').click();


