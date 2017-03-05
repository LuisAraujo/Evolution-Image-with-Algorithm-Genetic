#ALGORITHM GENETIC - REPLICED IMAGE

This project is based on [Alteredqualia's project](http://alteredqualia.com/visualization/evolve/). 


> The goal is to get an image represented as a collection of overlapping circles of various colors and transparencies. 

## FEATURES ##

**START:**

1. We start from random number of circle (1 to n) on a superfice.
2. Each gene has  

**MUTATE:**

1. In each step we randomly modify one or more parameters of circle (like color, position or radius), addfy or removefy a circle;
2. The number of genes can be change is a random number (1 to 20% of genes length).

**CANVAS:**

1. The target image is showed in main canvas;
2. The best individual is showed in secound canvas;
3. The project has a hidden canvas for calculate fitness;
4. User can print image (print button);
5. The application save images when the fitness of best image has reduced 2.000.000;
6. Imagens are save in *data/NAME_OF_PROJECT* folder.

**FITNESS:**


1. The function fitness is calculate with sum of difference of all points; 
2. This difference is calculated with this equation: *|r1 r2| + |g1 + g2| + |b1 + b2|*.


**CUSTOM**

1. Users can choose background color (white, black or hex color);
2. Users can change maximus radius of circle;
3. Users can select specific image;
4. User can change number maximum initial of genes;
5. User can choose color mode of mutation (color or grayscale).

## RESULTS ##

**How does it look after some time?**


**Does it work on all images?**


## CONTACT ##

If you have any questions, suggestions, comments, you can send me a mail (luisaraujo.ifba@gmail.com). Feel free to improve on this implementation.

Source is released under [MIT License](https://en.wikipedia.org/wiki/MIT_License).

