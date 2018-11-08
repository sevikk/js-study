const arrayUrls = ['https://swapi.co/api/people/1/', 'https://swapi.co/api/people/2/'];

const getData = async (arrayUrls) => {
    const arrayOfResponse = [];
    const arrayOfPromise = arrayUrls.map(
        async (item, index) => await fetch(item)
    );
    const result = await Promise.all(arrayOfPromise);
    console.log(result);
    return result;
};

console.log(getData(arrayUrls))


/*----------------------------------------*/

async function getData() {
    const ids = await (await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')).json()
    const data = Promise.all(
        ids.map(async (i) => await (await fetch(`https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`)).json())
    )
    return data
}

getData()
    .then(data => {
        console.log(data)
    })