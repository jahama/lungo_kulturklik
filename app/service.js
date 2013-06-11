App.Service = (function(lng,app, undefined){
	var obj,tempalete,html;
	var obtenerEventos = function(){
		// cogo el fichero JSON con los datos en local
		$$.get('datos/datos.json',{ },
			function(response){
				console.log(response);
				/**  Cargar la BBDD con los datos que vienen del servicio**/
				app.Data.insertarEventos(response.eventos);
				app.View.eventos(response);
				
		});
	}

	 return {
	 	obtenerEventos: obtenerEventos
	 }

}) (Lungo,App);



