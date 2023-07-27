// Write your helper functions here!

//api site https://handlers.education.launchcode.org/static/planets.json
validateInput();
//console.log(validateInput())

require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    window.addEventListener("load", function() {
        let form = document.querySelector("form");
        form.addEventListener("submit", function() {
          let  pilotName = document.querySelector("input[name=pilotName]");
          let copilotName =  document.querySelector("input[name=copilotName]");
          let fuelLevel =  document.querySelector("input[name=fuelLevel]");
          let cargoMass =  document.querySelector("input[name=cargoMass]");
          

          if (pilotName.value === "" || copilotName.value === "") {
            alert("all fields are required!")
            event.preventDefault();
            return "Empty";
          }

            if (fuelLevel.value === ""|| cargoMass.value === "") {
                alert("all fields are required!")
                event.preventDefault();
                return "Empty";
                            
          }
          if (isNaN(fuelLevel.value)||isNaN(cargoMass.value)) {
            alert("nums only for fuel and cargo");
            event.preventDefault();
            return "Not a Number";
          } else{
            //alert("yea")
            // event.preventDefault();
            return "Is a Number";
            
          }
       
            
          
        });
      });
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    validateInput(testInput);

    //Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.


   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
