const say = (word, sentence) => {
	if (sentence) {
  		console.log(sentence);
      return;
  }
  
	console.log(word);
};

say(null, 'sentence');

->

const say = (word, sentence) => {
  
  if (word) {
  	console.log(word);
  }
  
  return (sentence) => {
  	  console.log(sentence);
      return;
  }
};

const saySentence = say(null);

saySentence('sentence');   

->

const say = {
  word(word) {
    console.log(word);
    return;
  },
  sentence(sentence) {
    console.log(sentence);
    return;
  },
  nothing() {
    return;
  }
};

const sayWord = (say['sentence'] || say.nothing);

sayWord('word');

-> 

const obj = {
  data: 'data',
};

const toUppercase = (obj) => {
  if (typeof obj.data === 'string') {
    return ({ ...obj,
      data: obj.data.toUpperCase(),
    });
  }

  return obj;
};

const double = (obj) => {
  if (typeof obj.data === 'number') {
    return ({ ...obj,
      data: obj.data * 2,
    });
  }

  return obj;
}

const result = _.flow(
  toUppercase,
  double,
)(obj);

console.log(result);