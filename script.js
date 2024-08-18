
const userForm = document.querySelector("#userForm");
const floorsInput = document.querySelector("#floors")
const liftsInput = document.querySelector("#lifts")
const building = document.querySelector("#building")


let totalFloors = 0
let totalLifts = 0
userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const [floorCount, liftCount] = [parseInt(floorsInput.value), parseInt(liftsInput.value)];

    if (liftCount <= 0) {
        alert("Number of lifts should be greater than 0");
    } else if (floorCount <= 0) {
        alert("Number of floors should be greater than 0");
    } else if (liftCount > floorCount) {
        alert("No. of lifts should be lesser than or equal to No. of Floors");
    } else {
        totalFloors = floorCount;
        totalLifts = liftCount;

        // Call the function to generate the simulation
        // generateSimulation(totalFloors, totalLifts);
        generateFloors()
    }

    console.log(floorCount);
    console.log(liftCount);
});


/* 
function generateSimulation(floors, lifts) {
    const simulationSection = document.querySelector("#simulation");
    simulationSection.innerHTML = "";


    for (let i = floors; i >= 1; i--) {
        const floor = document.createElement("div");
        floor.classList.add("floor");
        floor.innerHTML = `
        <div class="floor-buttons">
<button class="call-lift" data-floor="${i}">Call Lift</button>
        </div>
        <div class="lift-shaft"></div>
        `;
        simulationSection.appendChild(floor);
    };

    //for lifts

    const firstFloorLiftShaft = document.querySelector(".floor .lift-shaft");
    for (let j = 0; j < lifts; j++) {
        const lift = document.createElement('div');
        lift.classList.add("lift");
        lift.dataset.currentFloor = 1;
        firstFloorLiftShaft.appendChild(lift)
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("call-lift")) {
        const targetFloor = parseInt(e.target.dataset.floor);
        moveLiftToFloor(targetFloor);
    }
});

function moveLiftToFloor(targetFloor) {
    const lifts = document.querySelectorAll(".lift");
    let closestLift = null;
    let minDistance = Infinity;

    // Find the closest lift to the target floor
    lifts.forEach(lift => {
        const currentFloor = parseInt(lift.dataset.currentFloor);
        const distance = Math.abs(currentFloor - targetFloor);
        if (distance < minDistance) {
            minDistance = distance;
            closestLift = lift;
        }
    });

    if (closestLift) {
        // Move the lift to the target floor
        closestLift.style.transform = `translateY(-${(targetFloor - 1) * 100}px)`;
        closestLift.dataset.currentFloor = targetFloor;
    }
}
 */


const btnClickHandler = async (e) => {
    const element = e.target;
    console.log(element);
}


function generateFloors() {
    for (let i = totalFloors; i >= 1; i--) {
        const floorDiv = document.createElement("div");
        const btnDiv = document.createElement("div");
        const upButton = document.createElement("button");
        const downButton = document.createElement("button");

        floorDiv.className = `floor-container`;
        btnDiv.className = `floor-btn-container`;


        upButton.className = `btn`;
        upButton.textContent = "Up";

        downButton.classList = `btn`;
        downButton.textContent = "Down";

        upButton.addEventListener("click", btnClickHandler)
        downButton.addEventListener("click", btnClickHandler)

        //edge case
        // if (i === totalFloors) {
        //     upButton
        // }

        floorDiv.setAttribute("floor-id", i);
        upButton.setAttribute("floor-id", i);
        downButton.setAttribute("floor-id", i);


        btnDiv.append(upButton, downButton);
        floorDiv.append(btnDiv);
        building.append(floorDiv)
    }
}