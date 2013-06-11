
App.Events = (function(lng,app, undefined){
	
	// Creamos un selector para que cuando pinche en el boton de refrescar
	// se llama al servicio para actualizar los datos
	
	lng.dom('[data-icon=refresh]').tap(function(event){
		console.log(" Boto de actualizar ");
		
		// Comprobamos si hay datos en la BBDD
		lng.Data.Sql.select("eventos",null,function(result){
			// Si hay datos --> Cargar los datos de la BBDD
			if (result.length > 0){
				console.log(" Carga de la BBDD",result);
				var eventos = {eventos:result};
				app.View.eventos(eventos);
			}else{ // Si no hay datos se trae la informacion del servicio web
				console.log(" Carga del servicio");
				app.Service.obtenerEventos();
			}
		});
		
	});


	//
	lng.dom('article#panoramio-items li ').tap(function(event){
		console.log(event);
		
	});


	/* ==================================
			CARGA DE LA PAGINA DE DETALLE
	   ==================================  */

	   //
	lng.dom('section#s_detalle_foto').on( 'load' ,function(event){
		setTimeout(function(){
			console.log(" terminado ");
		console.log(event);
		},3000);
console.log(" esperando ");
		
		
	});

	 return {
	 	
	 }

}) (Lungo,App);



