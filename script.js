let row
let isClicked = false
let inputCar = document.getElementById('carName')
let inputTime = document.getElementById('carTime')

	let elemMark = () => {
		let d = document;
		let name;
		let timeBlock
		let carBlock

		name = d.getElementById("carName").value;
		let tbody = d.getElementById("tab1").getElementsByTagName("TBODY")[0];
		row = d.createElement("TR");
		row.classList.add('addTime__row')
		tbody.appendChild(row);
		
		/*let deleteButton = () => {
			let allRow = document.getElementsByClassName('addTime__row')
			for (let i = 0; i < allRow.length; i++) {
				console.log(allRow[i])
				let span = document.createElement("SPAN");
  		  span.className = "addTime__deleteBtn";
				allRow[i].appendChild(span);
				
			}
		
		}
		deleteButton()
		*/
		let allRow = d.getElementsByClassName('addTime__row')
		for (const row of allRow) {
			row.onclick = () => {
				row.style.display = 'none'
			}
		}

		let td1 = d.createElement("TD");
		td1.classList.add('addTime__cell')
		row.appendChild(td1)
		td1.innerHTML = name;
		isClicked = true
		console.log(isClicked)

		timeBlock = d.getElementById('timeBlock')
		carBlock = d.getElementById('carBlock')
		if (isClicked === true) {
			carBlock.style.display = 'none'
			timeBlock.style.display = 'block'
			inputTime.focus()
			inputTime.value = ''
		}
	}

	let elemTime = () => {
		let d = document;
		let carTime
		let timeBlock
		carTime = d.getElementById('carTime').value;			
		let td2 = d.createElement('TD')
		row.appendChild(td2)
		td2.innerHTML = carTime
		isClicked = false
		console.log(isClicked)
		timeBlock = d.getElementById('timeBlock')
		carBlock = d.getElementById('carBlock')
		if (isClicked === false) {
			carBlock.style.display = 'block'
			timeBlock.style.display = 'none'
			inputCar.value = ''
		}
	}
	
	inputCar.addEventListener('keypress', (keyPressed) => {
		const keyEnter = 13;
		if (keyPressed.which == keyEnter) {
			elemMark();
		}
	})

	inputTime.addEventListener('keypress', (keyPressed) => {
		const keyEnter = 13;
		if (keyPressed.which == keyEnter) {
			elemTime();
		}
	})



let carScore = {
  car: "shelby",
  time: "2:20"
};

function newScore(car, time) {
	this.carName = car;
	this.carTime = time;
}
let newHighscore = new newScore("Ferrari", '02:22');
document.getElementById("demo").innerHTML =
"new record is " + newHighscore.carName + " " + newHighscore.carTime + "."; 

let car = ["shelby", "Ferrarri", "BMW m3 05"];
const carTime = (time, cars) => {
  let highscore = [];
  for (let car of cars) {
    console.log(car);
  }
};