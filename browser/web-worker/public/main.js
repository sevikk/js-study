const firstNumber = document.querySelector('#number1');
const secondNumber = document.querySelector('#number2');
const result = document.querySelector('.result');

const webWorkerExist = window.Worker; 
const pathToWorker = './worker.js';




if (webWorkerExist) { // Check if Browser supports the Worker api.
	// Requires script name as input
	const myWorker = new Worker(pathToWorker);

	firstNumber.onchange = () => {
		const values = [firstNumber.value, secondNumber.value];

		// Sending message as an array to the worker
	  myWorker.postMessage(values);
	};

	secondNumber.onchange = () => {
		const values = [firstNumber.value, secondNumber.value];

	  myWorker.postMessage(values);
	};

	// recieve message from web worker
	myWorker.onmessage = e => {
		result.textContent = e.data;
	};
}
