miterFinder is being built as a reference for what will later be a react native project.

miterFinder is for finding the measurements to use when mitering pipe fittings for pipeline and other piping projects.

It first finds the center of a 90 degree fitting by adding half of itself back to itself. 

It then adds half the pipes radius to get the outside measurement. 
It then subtracts half the pipes radius to get the inside measurement. 

It then uses the formula (2 * PI * radius) * (angle / 360) on the outside. Where radius is the outside measurement. 
It then uses the formula (2 * PI * radius) * (angle / 360) on the inside. Where raius is the inside measurement.

In most instances anyone working with pipe in USA uses inches as fractions instead of decimal so the next part is to take the decimals and convert them to fractions. 

This part is where things get tricky and the code gets crowded. There isnt a real easy way to convert decimals to fractions in the way I need. Considering you dont just use normal fractions in inches. you mostly use 1/64, 1/32, 1/16, 1/8, 1/4, 1/2 etc.
You never use 1/3, 1/5 etc. Basically you never have a odd denominator. 

My solution was to make an if statement that in a primitive way rounds the decimal to the nearest fraction with an even denominator.

I hope to eventually add:

A formula to figure pipe schedule(thickness) and use it to change the measurements to be more precise. 

