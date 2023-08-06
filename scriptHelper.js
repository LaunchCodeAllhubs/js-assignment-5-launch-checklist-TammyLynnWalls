// Write your helper functions here!

//api site https://handlers.education.launchcode.org/static/planets.json
validateInput();
//console.log(validateInput())


require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML =
   // Here is the HTML formatting for our mission target div.
   
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
  let numberTestInput= Number(testInput);
  
  if(testInput === "" ){
    return "Empty"
  }
  
  else if(isNaN(numberTestInput) ){
    return "Not a number"
  }

  else if(!isNaN(numberTestInput) ){
    return "Is a number"
  }

  
    // window.addEventListener("load", function() {
    //     let form = document.querySelector("form");
    //     form.addEventListener("submit", function() {
    //       let  pilotName = document.querySelector("input[name=pilotName]");
    //       let copilotName =  document.querySelector("input[name=copilotName]");
    //       let fuelLevel =  document.querySelector("input[name=fuelLevel]");
    //       let cargoMass =  document.querySelector("input[name=cargoMass]");
    //       let rtrnStatement ="";
          


    //     const fieldValues = [pilotName.value,copilotName.value,fuelLevel.value, cargoMass.value]
          
         
    //       if (pilotName.value === "" || copilotName.value === "" ||fuelLevel.value === "" ||cargoMass.value === "") {
    //         alert("all fields are required!")
    //         event.preventDefault();
    //         rtrnStatement += "Empty";
    //       };

    //       if ((!isNaN(pilotName.value)) || (!isNaN(copilotName.value)) ){
    //         alert("Please enter a valid name!")
    //         event.preventDefault();
    //         rtrnStatement += "Not a string";
    //       // } else if ((isNaN(pilotName.value)) && (isNaN(copilotName.value))){
    //       //   rtrnStatement += "Is a string";
    //       // }
    //       };
        

    //       if (isNaN(fuelLevel.value)||isNaN(cargoMass.value)) {
    //         alert("nums only for fuel and cargo");
    //         event.preventDefault();
    //         rtrnStatement += " Not a Number";
    //       } else if (!isNaN(fuelLevel.value)||!isNaN(cargoMass.value)){
            
    //         rtrnStatement += " Is a Number";
            
    //       };
    //     console.log(rtrnStatement);
    //     return rtrnStatement;
            
          
    //     });
    //   });
}
let faultyItems = document.getElementById("faultyItems");
    faultyItems.style.visibility = "visible";

    

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  console.log(fuelLevel, cargoLevel)
  let pilotStatus = document.getElementById("pilotStatus");
    
  let copilotStatus = document.getElementById("copilotStatus");
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||validateInput(fuelLevel) === "Empty" ||validateInput(cargoLevel) === "Empty") {
              alert("all fields are required!")
    }
    else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" ||validateInput(fuelLevel) === "Not a number" ||validateInput(cargoLevel) === "Not a number") {
      console.log(pilot.value, copilot.value,fuelLevel.value, cargoLevel.value);
      alert("Make sure to enter valid information for each field!")
} else {
  let launchStatus = document.getElementById("launchStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  list.style.visibility = 'visible';
  
    pilotStatus.innerHTML = `${pilot} is ready for launch `;
    copilotStatus.innerHTML = `${copilot} is ready for launch`;
    if (fuelLevel<10000 && cargoLevel<=10000){
      //why is this not visible??? is this formSubmission function being called???
      fuelStatus.innerHTML = `There is not enough fuel for the journey.`;
      cargoStatus.innerHTML = `Cargo is low enouch for the shuttle to take off.`;
      launchStatus.innerHTML = "Shuttle not ready for launch"
      launchStatus.style.color = "#C7254E";
      
    }
    else if (cargoLevel>10000 && fuelLevel >= 10000){
      //why is this not visible??? is this formSubmission function being called???
      cargoStatus.innerHTML = `Cargo is too heavy for the shuttle to take off.`;
      fuelStatus.innerHTML = `There is enough fuel for the journey.`;
      
      
      launchStatus.innerHTML = "Shuttle not ready for launch"
      launchStatus.style.color = "#C7254E";
    } else if (cargoLevel>10000 && fuelLevel < 10000){
      cargoStatus.innerHTML = `Cargo is too heavy for the shuttle to take off.`;
      fuelStatus.innerHTML = `There is not enough fuel for the journey.`;
      
      
      launchStatus.innerHTML = "Shuttle not ready for launch"
      launchStatus.style.color = "#C7254E";
      
    }
    else{
      console.log(fuelLevel, cargoLevel)
      launchStatus.innerHTML = "Shuttle is ready for launch"
      launchStatus.style.color = "#419F6A";
      cargoStatus.innerHTML = `Cargo is low enouch for the shuttle to take off.`;
      fuelStatus.innerHTML = `There is enough fuel for the journey.`;
    }
}

    //Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.

    
        
   




   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
      return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planetsReturned) {
  let planetNumber = Math.floor(Math.random()*planetsReturned.length);
  return planetsReturned[planetNumber];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
