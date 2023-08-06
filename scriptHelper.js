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
          let rtrnStatement ="";
          


        const fieldValues = [pilotName.value,copilotName.value,fuelLevel.value, cargoMass.value]
          
         
          if (pilotName.value === "" || copilotName.value === "" ||fuelLevel.value === "" ||cargoMass.value === "") {
            alert("all fields are required!")
            event.preventDefault();
            rtrnStatement += "Empty";
          };
        

          if (isNaN(fuelLevel.value)||isNaN(cargoMass.value)) {
            alert("nums only for fuel and cargo");
            event.preventDefault();
            rtrnStatement += " Not a Number";
          } else if (!isNaN(fuelLevel.value)||!isNaN(cargoMass.value)){
            
            rtrnStatement += " Is a Number";
            
          }
        console.log(rtrnStatement);
        return rtrnStatement;
            
          
        });
      });
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    validateInput(testInput);

    //Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
    const faultyItems = getElementById("faultyItems");
    
    
    document.getElementById("pilotStatus").innerHTML = `${pilotName.value}`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName.value}`;

    if (fuelLevel.value<10000){
      //why is this not visible??? is this formSubmission function being called???
      faultyItems.style.visibility = "visible";
    };


    if (cargoMass.value>10000){

      faultyItems.style.visibility = "visible";
    };

//have these here to see the ids
    // pilotStatus.innerHTML = `${pilotName.value}`;
    //                <li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
    //                 <li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>
    //                 <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
    //                 <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>

   
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
