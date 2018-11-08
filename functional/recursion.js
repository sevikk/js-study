const countDown = number => {
    if (number > 0) countDown(number - 1);
}

countDown(2);

/*---------------------*/

// Recursion very good for tree structure

const countDown = (count) => {
	if (count === 0) return; 
  console.log(count);
  countDown(--count);
};

countDown(10);