	  var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.moveTo(0, 100);
      context.quadraticCurveTo(138, -98, 273, 100);
      context.moveTo(273, 100);
      context.lineTo(273, 90);
      context.moveTo(275, 100);
      context.lineTo(265, 97);
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
    		b_input.style.display = 'block';

    		  context.beginPath();
		      context.moveTo(273, 100);
		      context.quadraticCurveTo(353, 0, 430, 100);
		      context.moveTo(430, 100);
		      context.lineTo(427, 90);
		      context.moveTo(430, 100);
		      context.lineTo(420, 97);
		      context.lineWidth = 2;

		      // line color
		      context.strokeStyle = '#E636DD';
		      context.stroke();





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


 	 var a = Number(document.getElementById('a').textContent);
 	 var b = Number(document.getElementById('b').textContent);

 	 c_input.oninput = function() {
    	if(c_input.value != a + b){
    		c_input.style.color = 'red';
    	}else{
    		c_input.style.display = 'none';
    		document.getElementById('c_fin').style.display = 'inline';
    	}
 	 };
