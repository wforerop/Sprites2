window.onload = function()
{
	var pasos = ["below1","below2","right1","right2"];
	var N_camina =1;
	var camina_inversa =5;
	var camina = false ;
	var cont =0;



setInterval(function()
	{if(!camina)
		 
		cont ++ ;
		nom_div("spritefred").setAttribute ("class","caminar",+pasos[N_camina-1]);
		N_camina++;
		if (N_camina>=5)
		{
			N_camina = 1;
		}

},100);
nom_div("boton").addEventListener("click",function(event)
{
	camina =!camina;

});
function nom_div(div)
{
	return document.getElementById(div);
}
}