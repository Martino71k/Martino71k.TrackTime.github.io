let carArr = [
]
let timeArr = []
let resArr = []


let row
let isClicked = false
let inputCar = document.getElementById('carName')
let inputTime = document.getElementById('carTime')

let name
let carTime
let testObj = {
	names: name,
	cartimes: carTime
}
	let elemMark = () => {
		let d = document;
		//let name;
		let timeBlock
		let carBlock

		name = d.getElementById("carName").value;
		if ( name === '') {
			alert('Нужно ввести данные!') 
			return
		}
		let tbody = d.getElementById("tab1").getElementsByTagName("TBODY")[0];
		row = d.createElement("TR");
		row.classList.add('addTime__row')
		tbody.appendChild(row);
		
		let allRow = d.getElementsByClassName('addTime__row')
		for (const row of allRow) {
			row.onclick = () => {
				row.style.display = 'none'
			//	timeArray.splice(row)
			}
		}

		let td1 = d.createElement("TD");
		td1.classList.add('addTime__cell')
		row.appendChild(td1)
		td1.innerHTML = name;

		 //push into array
		 testObj = {
			names: name
		 }
		 carArr.push(testObj)
		console.log(carArr)

		//localStorage.setItem('nameStorage', name)

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
		//let carTime
		let timeBlock
		carTime = d.getElementById('carTime').value;	
		if ( carTime === '') {
			alert('Нужно ввести данные!') 
			return
		}		
		
		let td2 = d.createElement('TD')
		row.appendChild(td2)
		td2.innerHTML = carTime
		
		testObj = {
			times: carTime
		 }
		 carArr.push(testObj)
		console.log(carArr) //push into array

		toLocal()

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


	///////////////////////////////////
	let tbod = document.getElementsByTagName('tbody')
	let toLocal = () => {
		let arr = []

		for (const i of tbod) {
			arr.push(i.innerHTML)
			console.log(arr)
			window.localStorage.myitems = i.innerHTML;
			
		}
	}

	let getLocal =() => {
		var storedValues = window.localStorage.myitems
		if(!storedValues) {
			tbod.innerHTML = '<tr>Make a to do list</tr>'
		}
		else {
			for (const i of tbod) {
				i.innerHTML = storedValues
			}
		}
	}
	getLocal()
	
	let deleteTable = () => {
		localStorage.clear();
		let tr = document.getElementsByClassName('addTime__row')
		for (const i of tr) {
			i.style.display = 'none'
		}
	}
/*	for (var j=0; j<carArr.length; j++) {
		resArr[j] = new makeArray(carArr[j], timeArr[j]);
	}
	let makeArray = (first,second) => {

	
			this.first = first;
			this.second = second;
			console.log(resArr)
	
}
*/



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
