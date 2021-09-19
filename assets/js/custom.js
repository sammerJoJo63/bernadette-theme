$(document).ready(function() {
	
	//fish ID array
	const N = 200;
	var fishID = Array.from({length: N}, (_, index) => index + 1);
	
	//color array
	var colors = new Array("red", "orange", "yellow", "green", "lime", "blue", "lightblue", "purple", "lilac");
	
	//css vars	  
	var left = "left";
	var right = "right";
	var top = "top";
	var bottom = "bottom";
	
	var D = 5;
	var del = Array.from({length: D}, (_, index) => index + 1);
	
	var T = 50;
	var time = Array.from({length: T}, (_, index) => index + 1);
	var De = 6;
	var delay = Array.from({length: De}, (_, index) => index);
	//console.log(del);
		
	var PLR = 800;
	var posLR = Array.from({length: PLR}, (_, index) => index + 1);
	var PTB = 500;
	var posTB = Array.from({length: PTB}, (_, index) => index + 1);
	
	var items = rainbowFish(fishID, top, bottom, left, right, colors, posTB, posLR, del, time, delay);
	//console.log(items);
	
	$("#fishSwim .water").append(items);
	
	mainFishColor(colors);
	
	function mainFishColor(colorList) {	
		for(var i = 0; i < colorList.length; i++) {
			var shade = colorList[i];
			//console.log(shade);
			(function(index) {
				setTimeout(function(shade) { 
					var shade = colorList[index];
					//console.log(shade);
					swimFish(shade, colorList);	
				}, index*5000);
			})(i);
		}
	}
	
	function rainbowFish(f, t, b, l, r, c, ptb, plr, d, ti, delay) {
		var text = "";
		
		var i;
		for (i = 0; i < f.length; i++) {
			var lrValue = Math.random() < 0.5 ? l : r
			var tbValue = Math.random() < 0.5 ? t : b;
			
			var item = i + 1;
			
			var randomLR = plr[Math.floor(Math.random()*plr.length)];
			var randomTB = ptb[Math.floor(Math.random()*ptb.length)];
			
			var randomDelay = delay[Math.floor(Math.random()*delay.length)];
			var randomDuration = ti[Math.floor(Math.random()*ti.length)];
			
			var randomColor = c[Math.floor(Math.random()*c.length)];
			var randomAniDelay = d[Math.floor(Math.random()*d.length)];
			text += "<div class='fish' id='fish" + item + "' style='" + tbValue + ":" + randomTB + "px;  animation-duration:" + randomDuration + "s;'><div class='body " + randomColor + "'></div><div class='tail " + randomColor + "'></div></div>";
					
		}
		return text;
	}
	
	function swimFish(c, colors) {
		var $this = $(".mainfish");
		var this_body = $(".mainfish .body");
		var this_tail = $(".mainfish .tail");
		
		var classes = colors.join(" ");
		
		//console.log(c);
		
		this_body.removeClass(classes);
		this_tail.removeClass(classes);
		
		this_body.addClass(c);
		this_tail.addClass(c);	
		
		
		if ($(".mainfish .body").hasClass("lilac") && $(".mainfish .tail").hasClass("lilac")) {
			console.log("qveen");
			setTimeout(mainFishColor, 5000, colors);
		}
	}
	
});