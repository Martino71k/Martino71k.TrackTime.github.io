let todos = []

let Todo = (name) => {
	this.name = name
}

let addNewName = (name) => {
	let t = new Todo(name);
	todos.push(t)
}

let deleteName = (index) => {
	todos.splice(index, 1)
}

let getToDo = (index) => {
	return todos[index]
}

let listTodos = () => {
	let tab = ''
	for (const i in todos) {
		let todo = todos[i]
		let name = todo.name
		
		tab += '<div>' + name + '</div>'
		let s = document.getElementsByTagName('body');
		s.appendChild(tab)
	}
}

let create = () => {
	let name = document.getElementById('carName').value
	addNewName(name)
	listTodos()
}