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

          if ((!isNaN(pilotName.value)) || (!isNaN(copilotName.value)) ){
            alert("Please enter a valid name!")
            event.preventDefault();
            rtrnStatement += "Not a string";
          // } else if ((isNaN(pilotName.value)) && (isNaN(copilotName.value))){
          //   rtrnStatement += "Is a string";
          // }
          };
        

          if (isNaN(fuelLevel.value)||isNaN(cargoMass.value)) {
            alert("nums only for fuel and cargo");
            event.preventDefault();
            rtrnStatement += " Not a Number";
          } else if (!isNaN(fuelLevel.value)||!isNaN(cargoMass.value)){
            
            rtrnStatement += " Is a Number";
            
          };
        console.log(rtrnStatement);
        return rtrnStatement;
            
          
        });
      });
}
let faultyItems = document.getElementById("faultyItems");
    faultyItems.style.visibility = "visible";

    

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    validateInput(testInput);

    //Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.

    // ???let faultyItems = document.getElementById("faultyItems");
        
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `${pilotName.value} is ready for launch `;
    let copilotStatus = document.getElementById("copilotStatus");copilotStatus.innerHTML = `${copilotName.value} is ready for launch`;

    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById('launchStatus');
    

    if (fuelLevel.value<10000){
      //why is this not visible??? is this formSubmission function being called???
      fuelStatus.innerHTML = `${fuelLevel.value} is not enough fuel for the journey.`;
      //faultyItems.style.visibility = "visible";
      list.style.visibility = 'visible';//?????is this the way?
      launchStatus.innerHTML = "Shuttle not ready for launch"
      launchStatus.style.color = "#C7254E";
    };

    if (cargoMass.value>10000){
      //why is this not visible??? is this formSubmission function being called???
      cargoStatus.innerHTML = `${cargoMass.value} is too much mass for the shuttle to take off.`;
      //faultyItems.style.visibility = "visible";
      list.style.visibility = 'visible';//?????is this the way?
      launchStatus.innerHTML = "Shuttle not ready for launch"
      launchStatus.style.color = "#C7254E";
    };

    if (fuelLevel.value>=10000 && cargoMass.value<=10000) {
      launchStatus.innerHTML = "Shuttle is ready for launch"
      launchStatus.style.color = "#419F6A";
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
