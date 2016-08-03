#!/bin/bash
rm ./combined.css; 
for f in *.css; do (cat "${f}"; echo) >> combined.css; done


