﻿var x= 0;var rojo;var verde;var azul;function setup() {	createCanvas(1000,1000);    background (255,255,0)}function draw() {    rojo = random (0,255);    verde = random (0,255);    azul = random (0,255);  fill (rojo, verde, azul);  ellipse(mouseX, mouseY, 50,50,50,50);  x = x + 2;}