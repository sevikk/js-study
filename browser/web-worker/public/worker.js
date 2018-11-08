onmessage = message => {

  const firstNumber = message.data[0];
  const secondNumber = message.data[1];
   
  const workerResult = 'Result: ' + (firstNumber * secondNumber);

  // send message back
  postMessage(workerResult);
}