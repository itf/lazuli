#!/bin/bash
#mogrify -path ./thumb -resize 75x50 -strip -interlace Plane -gaussian-blur 0.05 -quality 15 -compress Group4 -format jpg *.jpg
 
#mogrify -path ./smaller  -strip -interlace Plane -sampling-factor 4:2:0 -quality 75  -format jpg *.jpg

mogrify -path ./smaller  -strip -interlace none -sampling-factor 4:2:0 -quality 75  -format jpg *.jpg
