	function Chart(){
			document.getElementById('c_fin').style.display = 'none';
 	 		document.getElementById('c').style.display = 'inline';
 	 		document.getElementById('b_input').style.display = 'none';
 	 		document.getElementById('a_input').style.display = 'block';


		 	 var a = Number(document.getElementById('a').textContent);
		 	 var b = Number(document.getElementById('b').textContent);
		 	 var step = 39;


		 	 document.getElementById('a_input').style.left = 220 + (step * a)/2 + 'px';
		 	 document.getElementById('b_input').style.left = 220 + (step * a + b*step/2) + 'px' ;

			  var canvas = document.getElementById('canvas');
		      var context = canvas.getContext('2d');
		      context.clearRect(0, 0, 800, 100);

		      context.beginPath();
		      context.moveTo(0, 100);
		      context.quadraticCurveTo((step * a)/2, -98, step * a, 100);
		      context.moveTo(step * a, 100);
		      context.lineTo(step * a, 90);
		      context.moveTo(step * a, 100);
		      context.lineTo(step * a - 10, 97);
		      context.lineWidth = 2;

		      // line color
		      context.strokeStyle = '#E636DD';
		      context.stroke();


		      var a_input = document.getElementById('a_input');
			  var b_input = document.getElementById('b_input');
			  var c_input = document.getElementById('c_input');

		      a_input.oninput = function() {
		    	if(a_input.value != document.getElementById('a').textContent){
		    		a_input.style.color = 'red';
		    		document.getElementById('a').style.backgroundColor = '#E8E832';
		    	}else{
		    		document.getElementById('a').style.backgroundColor = 'white';
		    		a_input.style.color = 'black';
		    		if(isNaN(b) == false){ 

			    		b_input.style.display = 'block';

			    		  context.beginPath();
					      context.moveTo(step * a, 100);
					      context.quadraticCurveTo(step * a + b*step/2, 0, step * (a + b), 100);
					      context.moveTo(step * (a + b), 100);
					      context.lineTo(step * (a + b), 90);
					      context.moveTo(step * (a + b), 100);
					      context.lineTo(step * (a + b) - 10, 97);
					      context.lineWidth = 2;

					      // line color
					      context.strokeStyle = '#E636DD';
					      context.stroke();
				  }





		    	}
		 	 };

		 	 b_input.oninput = function() {
		    	if(b_input.value != document.getElementById('b').textContent){
		    		b_input.style.color = 'red';
		    		document.getElementById('b').style.backgroundColor = '#E8E832';
		    	}else{
		    		document.getElementById('b').style.backgroundColor = 'white';
		    		b_input.style.color = 'black';
		    		document.getElementById('c').style.display = 'none';
		    		c_input.style.display = 'inline';
		    	}
		 	 };




		 	 c_input.oninput = function() {
		    	if(c_input.value != a + b){
		    		c_input.style.color = 'red';
		    	}else{
		    		c_input.style.display = 'none';
		    		document.getElementById('c_fin').style.display = 'inline';
		    		document.getElementById('c_fin').innerHTML = a + b;
		    	}
		 	 };	
	}
	

 	 var set_a = document.getElementById('set_a');
 	

 	 set_a.oninput = function() {
 	 	if(set_a.value < 0 || set_a.value > 20 || Number(set_b.value) + Number(set_a.value)  > 20 || isNaN(set_a.value) == true ){
 	 		set_a.style.color = 'red';
 	 	}else{
 	 		set_a.style.color = 'black';

 	 	}
 	 }

 	 set_a.onchange = function(){
 	 	if(set_a.value < 0 || set_a.value > 20 || Number(set_b.value) + Number(set_a.value)  > 20 || isNaN(set_a.value) == true ){
 	 	}else{
 	 		document.getElementById('a').innerHTML = set_a.value;
 	 		Chart();
 	 	}
 	 }

 	 set_b.oninput = function() {
 	 	if(set_b.value < 0 || Number(set_b.value) + Number(set_a.value)  > 20 || isNaN(set_b.value) == true ){
 	 		set_b.style.color = 'red';
 	 	}else{
 	 		set_b.style.color = 'black';

 	 	}
 	 }

 	 set_b.onchange = function(){
 	 	if(set_b.value < 0 || Number(set_b.value) + Number(set_a.value) > 20 || isNaN(set_b.value) == true ){
 	 	}else{
 	 		document.getElementById('b').innerHTML = set_b.value;
 	 		Chart();
			}
 	 }

 	 		
