
let a = 5;

const requestUrl = 'https://jsonplaceholder.typicode.com/users';
const repetitor = 'https://repetitora.net/api/JS/Images'
const button = document.querySelector('.btn')
const id = document.querySelector('.id');




button.addEventListener('click', () => {
	getData(id.value).then(onDataReceived)

});




function onDataReceived(result) {
	// result.forEach(element => {
	// 	const img = document.createElement('img');
	// 	img.src = element.thumbnail;
	// 	document.querySelector('.body').append(img);
	console.log(result);
	// });

	document.querySelector('.name').innerHTML = result[0].name;
	document.querySelector('.address').innerHTML = result[0].address.street;
	document.querySelector('.body').innerHTML = result[0].email;

	// result.forEach(element => {
	// 	const div = document.createElement('div');
	// 	div.className = 'box';
	// 	div.innerHTML = element.name;
	// 	document.body.append(div);
	// 	console.log(element.address);
	// 	const street = document.createElement('div');
	// 	street.className = 'box';
	// 	street.innerHTML = element.address.street;
	// 	document.body.append(street);

	// });

}

const todoButton = document.querySelector('.todo__button');
const todoInput = document.querySelector('.todo__input');


todoButton.addEventListener('click', () => {

	createTasks(todoInput.value).then(getTasks).then(onTasksReceived)


	// getTasks().then(onTasksReceived)

})

// createTasks('learn js').then((data) => {
// 	console.log(data.task.title)
// })

function onTasksReceived(dates) {
	document.querySelector('.todo__list').innerHTML = '';
	dates.forEach(data => {
		const li = document.createElement('li');
		li.className = 'task';
		li.innerHTML = data.title;
		li.dataset.id = data.id;
		document.querySelector('.todo__list').append(li);
		const buttonDelete = document.createElement('button');
		buttonDelete.className = 'delete';
		buttonDelete.innerHTML = 'удалить';
		document.querySelector('.todo__list').append(buttonDelete);
		buttonDelete.dataset.id = data.id;
		const buttonUpdate = document.createElement('button');
		buttonUpdate.className = 'update';
		buttonUpdate.innerHTML = 'редактировать';
		document.querySelector('.todo__list').append(buttonUpdate);
		buttonUpdate.dataset.id = data.id;
		buttonDelete.addEventListener('click', () => {
			const attr = buttonDelete.dataset.id;
			deleteTasks(attr);
			document.querySelector(`li.task[data-id="${attr}"]`).style.display = 'none';
			document.querySelector(`button.delete[data-id="${attr}"]`).style.display = 'none';
			document.querySelector(`button.update[data-id="${attr}"]`).style.display = 'none';
		});
		buttonUpdate.addEventListener('click', () => {
			const attr = buttonDelete.dataset.id;
			const boxUpdate = document.createElement('input');
			boxUpdate.dataset.id = attr;
			document.querySelector(`li.task[data-id="${attr}"]`).append(boxUpdate);
			document.querySelector(`button.update[data-id="${attr}"]`).style.display = 'none';
			const saveButton = document.createElement('button');
			saveButton.innerHTML = 'сохранить';
			saveButton.className = 'save';
			saveButton.dataset.id = attr;
			document.querySelector(`li.task[data-id="${attr}"]`).append(saveButton);
			saveButton.addEventListener('click', () => {
				const taskUpdate = document.querySelector(`input[data-id="${attr}"]`);
				updateTasks(saveButton.dataset.id, taskUpdate.value);
				li.innerHTML = taskUpdate.value;
				document.querySelector(`button.update[data-id="${attr}"]`).style.display = 'inline-block';
			})
		})
	});

}


	// const buttonsDelete = querySelectorAll('.delete');

	// buttonsDelete.forEach(button => {
	// 	button.addEventListener('click', (button) => {
	// 		deleteTasks(button.dataset.id)
	// 	})
	// })





// deleteTasks("e1af8ee0-c90d-448e-9ef2-3c03f3503f99").then((data) => {
// 	console.log(data)
// })
// updateTasks("84cee8d8-69c4-4f60-a471-5c67a062fc68", "tortor", true).then((data) => {
// 	console.log(data)
// })
