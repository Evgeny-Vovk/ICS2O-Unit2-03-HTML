// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function gets users address and shows it back to user.
 */
function enterClicked() {
  // input
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById("address").innerHTML =
    "Your address is: " + streetNumber + streetName + "."
}
