function stopwatch (uchwytStopera,liczba)
{
	uchwytStopera.innerHTML= --liczba;
	
	if(liczba<=0)
		return
	
	
	
	setTimeout(function()
				 {
		
		stopwatch(uchwytStopera, liczba);
		
	},1000);
}






window.onload = function(){
	
	 var stoperStart = document.getElementById("stoperStart");
	
    var stoperStop = document.getElementById("stoperStop");
    
    
    var uchwytStopera = document.getElementById("uchwytStopera");
	
	
	
	stoperStart.onclick = function()
	{
		var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value; 
		
		uchwytStopera.innerHTML = poczatkowaWartosc; 
		setTimeout(function()
		{
			stopwatch(uchwytStopera,poczatkowaWartosc);
			
		},1000);
		
	};
	
	
};




















