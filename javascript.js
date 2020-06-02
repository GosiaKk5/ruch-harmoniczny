// SUWAKI
//suwak okresu
var okres = document.getElementById("suwokres");
var output = document.getElementById("wartokres");
output.innerHTML = okres.value;

okres.oninput = function()
{
  output.innerHTML = this.value;
}
// suwak amplitudy
var amplituda = document.getElementById("suwamplituda");
var output2 = document.getElementById("wartamplituda");
output2.innerHTML = amplituda.value;

amplituda.oninput = function() 
{
  output2.innerHTML = this.value;
}
// suwak fazy poczatkowej
var faza = document.getElementById("suwfaza");
var output3 = document.getElementById("wartfaza");
output3.innerHTML = faza.value;

faza.oninput = function() 
{
  output3.innerHTML = this.value;
}

// ANIMACJA SPREZYNY!!!


            function init(){
                
				var canvas = document.getElementById('myCanvas');
			    var ctx = canvas.getContext('2d');
				
                var T = document.getElementById("suwokres").value * 1; 
                var A = document.getElementById("suwamplituda").value *1; //  amplituda (max 100)
                var q = document.getElementById("suwfaza").value * 1 * Math.PI; // faza pocztkowa (max 2pi)                   
                var w = (2*Math.PI)/T; 
                var y; // wychylenie
                var t = 0;  
                var updatePosition = function()
                  {
                        y = A * Math.sin(w*t + q);
                  }
				
                var xp = 150; // poczatkowy x sprezyny
                var yp = 180; // poczatkowy y sprezyny
                var ix = 12;
                var iy = 10;
                var p = 16; // liczba przegiec
                var i;
                
               
				
					
				setInterval(animate, 10);
				
				function animate() {
					ctx.clearRect(0,0, canvas.width, canvas.height);
                    
                   
                    
                    // linie pomocnicze
                    ctx.beginPath();
                    ctx.fillStyle = 'rgba(0,0,0)';
                    ctx.setLineDash([5, 15]);
                    ctx.moveTo(25, yp + 2 *iy); // linia polozenia rownowagi
                    ctx.fillText("0", 10, yp + 2 *iy +4) // 0
                    ctx.lineTo(280, yp + 2 *iy); 
                    ctx.moveTo(25, yp + 2 *iy - A);// linia gornego max wychylenia
                    ctx.lineTo(280, yp + 2 *iy - A);
                    ctx.fillText("A", 10,  yp + 2 *iy - A +4) // A
                    ctx.moveTo(25, yp + 2 *iy + A);// linia dolnego max wychylenia
                    ctx.lineTo(280, yp + 2 *iy + A);
                    ctx.fillText("- A", 8,  yp + 2 *iy + A +4)// -A
                    ctx.stroke();
                    ctx.closePath();
                
                    
                    //ciezarek
                     ctx.fillStyle = '#336699';  // kolor ciezarka
                    
					ctx.beginPath();
                    ctx.setLineDash([0, 0]);
                    ctx.fillRect(xp - 2*ix, yp + iy/2 - y, 4*ix, 3*iy); 
                    // ciezarek
                    ctx.strokeRect(xp - 2*ix, yp + iy/2 - y, 4*ix, 3*iy); // obwod ciezarka
                    ctx.arc(xp,yp+2*iy - y,1,0,Math.PI * 2,false); // kropka w ciezarku
                    
                    //sprezyna
                    ctx.moveTo(xp, yp + iy/2 - y);
                    ctx.lineTo(xp , yp - y)
                    
                    for (var j = 1; j < p; j+=2)
                    {
                        ctx.lineTo(xp + ix, yp - (-0.5 + j)*iy - y*((p-j+0.5)/p));    
                        ctx.lineTo(xp - ix, yp - (0.5 + j)*iy - y*((p-j -0.5)/p));
                        i=j;
                    }
                    
                    ctx.lineTo(xp, yp - ((1 + i) * iy));
                    ctx.lineTo(xp, yp - ((1.5 + i) * iy)); 
                    ctx.stroke();
                    ctx.closePath();
                    
                    //sufit
                    
                    ctx.beginPath();
                    
                    ctx.strokeRect(xp - 5*ix, 0, 10*ix,  yp - ((1.5 + i) * iy) );
                    ctx.fillRect(xp - 5*ix, 0, 10*ix,  yp - ((1.5 + i) * iy) );
                    
                               
                    ctx. closePath();
                    
                    t+=0.01;
                    updatePosition();
                    
                    
					
				}
            };

// !!! ANIMACJA WYKRESU POLOZENIA!!!

            function polozenie(){
                var proba = document.getElementById("wykresx");
                var ctx = proba.getContext('2d'); 
    
                var T = document.getElementById("suwokres").value * 1; 
                var A = document.getElementById("suwamplituda").value *1; //  amplituda (max 1140)
                var q = document.getElementById("suwfaza").value * 1 * Math.PI; // faza pocztkowa (max 2pi)                   
                var w = (2*Math.PI)/T; 
                
                var t2 = 0;
                var x =0;
                var yp = 83; 
                var t3 = 40;
                     
                   var updatePosition2 = function()
                  {
                        x = (A * Math.sin(w*t2 + q))/2;
                  };
                
                ctx.beginPath()
                //os pozioma
                ctx.moveTo(10, yp);
                ctx.lineTo(640, yp);
                
                //os pionowa
                ctx.moveTo(t3, 5);
                ctx.lineTo(t3, 150);
                
                // strzlka x
                ctx.moveTo(t3 - 3, 9);
                ctx.lineTo(t3, 5);
                ctx.lineTo(t3 + 3, 9);
                
                // strzalka t
                ctx.moveTo(636, yp - 3);
                ctx.lineTo(640, yp);
                ctx.lineTo(636, yp+3);
                ctx.stroke();
                ctx.closePath();
                
                // opis wykresu
                ctx.font = "12px arial";
                ctx.beginPath();
                ctx.fillText("x(t)", t3 - 25, 10); // x(t)
                ctx.fillText("t", 635, yp + 15); // t
                ctx.fillText("0", t3 + 3, yp + 13); // 0
                ctx.moveTo(t3 - 2, yp - A/2);
                ctx.lineTo(t3 + 2, yp - A/2);
                ctx.stroke();
                ctx.fillText("A",t3 - 12, yp - A/2 + 5); //A
                ctx.fillText("-A",t3 - 15, yp + A/2 + 5);
                ctx.moveTo(t3 - 2, yp + A/2);
                ctx.lineTo(t3 + 2, yp + A/2);
                ctx.stroke();
                
                updatePosition2(); // ustawia punkt poczatkowy
                ctx.moveTo(t3, yp-x);
                   
                setInterval(animate2, 10);
                function animate2(){
                    ctx.strokeStyle = 'rgb(255, 0, 0)';
                    if(t3 < 620)
                        {
                             ctx.beginPath();
                            ctx.lineTo(t3,yp - x);
                            t3+=0.5;
                            t2 += 0.01;
                            updatePosition2();
                            ctx.lineTo(t3, yp - x);
                            //ctx.arc(t3, x+200, 5, 2 * Math.PI, false);
                            ctx.stroke();

                            ctx.closePath();
                        }
                   
                          
                     
                }
                   
}

//ANIMACJA WYKRESU PREDKOSCI

function predkosc(){
                var proba = document.getElementById("wykresv");
                var ctx = proba.getContext('2d'); 
    
                var T = document.getElementById("suwokres").value * 1; 
                var A = document.getElementById("suwamplituda").value *1; //  amplituda (max 1140)
                var q = document.getElementById("suwfaza").value * 1 * Math.PI; // faza pocztkowa (max 2pi)                   
                var w = (2*Math.PI)/T; 
                
                var t2 = 0;
                var x =0;
                var yp = 83; 
                var t3 = 40;
                     
                   var updatePosition2 = function()
                  {
                        x = (A * Math.cos(w*t2 + q))/2;
                  };
                
                ctx.beginPath()
                //os pozioma
                ctx.moveTo(10, yp);
                ctx.lineTo(640, yp);
                
                //os pionowa
                ctx.moveTo(t3, 5);
                ctx.lineTo(t3, 150);
                
                // strzlka x
                ctx.moveTo(t3 - 3, 9);
                ctx.lineTo(t3, 5);
                ctx.lineTo(t3 + 3, 9);
                
                // strzalka t
                ctx.moveTo(636, yp - 3);
                ctx.lineTo(640, yp);
                ctx.lineTo(636, yp+3);
                ctx.stroke();
                ctx.closePath();
                
                // opis wykresu
                ctx.font = "12px arial";
                ctx.beginPath();
                ctx.fillText("v(t)", t3 - 25, 10); // x(t)
                ctx.fillText("t", 635, yp + 15); // t
                ctx.fillText("0", t3 + 3, yp + 13); // 0
                ctx.moveTo(t3 - 2, yp - A/2);
                ctx.lineTo(t3 + 2, yp - A/2);
                ctx.stroke();
                ctx.font = "11px arial";
                ctx.fillText("vmax",t3 - 32, yp - A/2 + 5); //A
                ctx.fillText("-vmax",t3 - 34, yp + A/2 + 5);
                ctx.moveTo(t3 - 2, yp + A/2);
                ctx.lineTo(t3 + 2, yp + A/2);
                ctx.stroke();
                
                updatePosition2(); // ustawia punkt poczatkowy
                ctx.moveTo(t3, yp-x);
                   
                setInterval(animate2, 10);
                function animate2(){
                    ctx.strokeStyle = '#009933';
                    if(t3 < 620)
                        {
                             ctx.beginPath();
                            ctx.lineTo(t3,yp - x);
                            t3+=0.5;
                            t2 += 0.01;
                            updatePosition2();
                            ctx.lineTo(t3, yp - x);
                            //ctx.arc(t3, x+200, 5, 2 * Math.PI, false);
                            ctx.stroke();

                            ctx.closePath();
                        }
                   
                          
                     
                }
                   
}

// !!! Animacja wykresu przyspieszenia


            function przyspieszenie(){
                var proba = document.getElementById("wykresa");
                var ctx = proba.getContext('2d'); 
    
                var T = document.getElementById("suwokres").value * 1; 
                var A = document.getElementById("suwamplituda").value *1; //  amplituda (max 1140)
                var q = document.getElementById("suwfaza").value * 1 * Math.PI; // faza pocztkowa (max 2pi)                   
                var w = (2*Math.PI)/T; 
                
                var t2 = 0;
                var x =0;
                var yp = 83; 
                var t3 = 40;
                     
                   var updatePosition2 = function()
                  {
                        x = -(A * Math.sin(w*t2 + q))/2;
                  };
                
                ctx.beginPath()
                //os pozioma
                ctx.moveTo(10, yp);
                ctx.lineTo(640, yp);
                
                //os pionowa
                ctx.moveTo(t3, 5);
                ctx.lineTo(t3, 150);
                
                // strzlka x
                ctx.moveTo(t3 - 3, 9);
                ctx.lineTo(t3, 5);
                ctx.lineTo(t3 + 3, 9);
                
                // strzalka t
                ctx.moveTo(636, yp - 3);
                ctx.lineTo(640, yp);
                ctx.lineTo(636, yp+3);
                ctx.stroke();
                ctx.closePath();
                
                // opis wykresu
                ctx.font = "12px arial";
                ctx.beginPath();
                ctx.fillText("a(t)", t3 - 25, 10); // a(t)
                ctx.fillText("t", 635, yp + 15); // t
                ctx.fillText("0", t3 + 3, yp + 13); // 0
                ctx.moveTo(t3 - 2, yp - A/2);
                ctx.lineTo(t3 + 2, yp - A/2);
                ctx.stroke();
                ctx.font = "11px arial";
                ctx.fillText("amax",t3 - 32, yp - A/2 + 5); //A
                ctx.fillText("-amax",t3 - 35, yp + A/2 + 5);
                ctx.moveTo(t3 - 2, yp + A/2);
                ctx.lineTo(t3 + 2, yp + A/2);
                ctx.stroke();
                
                updatePosition2(); // ustawia punkt poczatkowy
                ctx.moveTo(t3, yp-x);
                   
                setInterval(animate2, 10);
                function animate2(){
                    ctx.strokeStyle = 'rgb(0, 0, 255)';
                    if(t3 < 620)
                        {
                             ctx.beginPath();
                            ctx.lineTo(t3,yp - x);
                            t3+=0.5;
                            t2 += 0.01;
                            updatePosition2();
                            ctx.lineTo(t3, yp - x);
                            //ctx.arc(t3, x+200, 5, 2 * Math.PI, false);
                            ctx.stroke();

                            ctx.closePath();
                        }
                   
                          
                     
                }
                   
}

