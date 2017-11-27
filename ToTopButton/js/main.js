window.onload = function(){
	
	var ToTopButton = document.getElementById("toTopButton");
	
	
				window.onscroll=function(){

					var ToTopButton = document.getElementById("toTopButton");
					var test = document.getElementById("test");
					var Yscrol=window.pageYOffset

					if(Yscrol>300)
						ToTopButton.style.display="block";
					else
						ToTopButton.style.display="none";
					
					test.innerHTML =Yscrol;
				}
	
	
	
	ToTopButton.onclick=function()
	{
		window.scrollBy(0,-1*window.pageYOffset);	
	};
	
	
};