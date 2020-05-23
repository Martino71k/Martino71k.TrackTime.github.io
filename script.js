let isClicked = false
	let row
	let elemMark = () => {
		let d = document;
		let name;
		let time
		let car 
		let carTime

		
		name = d.getElementById("carName").value;
		//carTime = d.getElementById('carTime').value;

		// Находим нужную таблицу
		let tbody = d.getElementById("tab1").getElementsByTagName("TBODY")[0];

		// Создаем строку таблицы и добавляем ее
		row = d.createElement("TR");
		tbody.appendChild(row);

		// Создаем ячейки в вышесозданной строке
		// и добавляем тх
		let td1 = d.createElement("TD");
		//let td2 = d.createElement('TD')
		row.appendChild(td1)
		//row.appendChild(td2)
		td1.innerHTML = name;

		//td2.innerHTML = carTime
		isClicked = true
		console.log(isClicked)
		time = d.getElementById('time')
		car = d.getElementById('car')
		if (isClicked === true) {
			car.style.display = 'none'
			time.style.display = 'block'
		}
		
	}
	
	let elemTime = () => {
		let d = document;
		let carTime
		let time
		carTime = d.getElementById('carTime').value;			
		let td2 = d.createElement('TD')
		row.appendChild(td2)
		td2.innerHTML = carTime
		console.log(td2)
		isClicked = false
		console.log(isClicked)
		time = d.getElementById('time')
		car = d.getElementById('car')
		if (isClicked === false) {
			car.style.display = 'block'
			time.style.display = 'none'
			
		}
	}

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