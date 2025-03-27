// Copyright (c) 2025 BrandonBCode All rights reserved
//
// Created by: BrandonBCode
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  let lengthA = parseInt(document.getElementById('lengthsidea-of-triangle').value);
  let lengthB = parseInt(document.getElementById('lengthsideb-of-triangle').value);
  let lengthC = parseInt(document.getElementById('lengthsidec-of-triangle').value);
  let height = parseInt(document.getElementById('height-of-triangle').value);
  let base = parseInt(document.getElementById('base-of-triangle').value);

  // process
  let area = base * height / 2;
  let perimeter = lengthA + lengthB + lengthC;

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
