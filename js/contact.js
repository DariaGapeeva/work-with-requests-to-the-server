
// function oldGetData(value) {

// 	const promise = $.ajax(`https://jsonplaceholder.typicode.com/users?id=${value}`)

// 	return promise
// }

function getData(value) {

	const promise = axios.get(`https://jsonplaceholder.typicode.com/users?id=${value}`)

	return promise.then(function (data) {
		return data.data
	})
}

function getTasks() {

	const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=101010&count=20`)

	return promise.then(function (data) {
		return data.data
	})
}
function createTasks(title) {

	const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
		widgetId: 101010,
		title: title
	})

	return promise.then(function (data) {
		return data.data
	})
}

function deleteTasks(id) {

	const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=101010&taskId=${id}`)
	return promise.then(function (data) {
		return data.data
	})

}
function updateTasks(id, title, done) {

	const promise = axios({
		method: 'put',
		url: 'https://repetitora.net/api/JS/Tasks',
		data: {
			widgetId: 101010,
			taskId: id,
			title: title,
			done: done
		}
	})

	//  = axios.put(`https://repetitora.net/api/JS/Tasks`, {
	// 	widgetId: 101010,
	// 	taskId: id,
	// 	title: title,
	// 	done: done

	// })

	return promise.then(function (data) {
		return data.data
	})
}