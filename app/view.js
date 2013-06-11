App.View = (function(lng,app, undefined){
	
	// Le decimos a Lungo que cree un nuevo template, uqe lo guardar en memoria
	// con el MARKIUP, que necesitamos para añadir luego la informacion que viene
	// del servecio


	var eventos = function(eventos){
		/** PART DE LA VISTA **/
		/** Utilizo Mustache como motor de plantillas **/
		console.log(eventos);
		template="<ul>{{#eventos}}\
						 <li id='{{id}}'data-icon=\"calendar\"><span class=\"icon calendar\"></span>\
							 <a href=\"#s_detalle_foto\" data-router=\"section\" data-id=\"{{photo_id}}\"><strong>{{evento_titulo}}</strong></a>\
							 <small>{{evento_tipo}} - {{photo_id}}</small>\
						</li> \
				  {{/eventos}}</ul>"; 
		html=Mustache.render(template,eventos);
		//Aqui es donde se 'pintaría' los datos que estamos consumiendo en JSON
        $$('section article#listado').html(html); 

	}
	
			

	 return {
	 	eventos: eventos
	 }
	 

}) (Lungo,App);




