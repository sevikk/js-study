// Select the node that will be observed for mutations
const targetNode = document.getElementById('list');

const buttonAppendChild = document.getElementById('buttonAppendChild');

const createElement = () => {
    const createItem = document.createElement('li');
    createItem.innerHTML = 'item';
    return createItem;
};

buttonAppendChild.addEventListener('click', () => {
    const element = createElement();
    targetNode.appendChild(element)
})

// Options for the observer (which mutations to observe)
const config = {
    attributes: true,
    childList: true
};

// Callback function to execute when mutations are observed
const callback = mutationsList => {

    const mutationsArray = Array.from(mutationsList);

    mutationsArray.map((mutation, index) => {
        const { type, attributeName } = mutation;

        if(type === 'childList') {
            console.log('A child node has been added.');
        }
        else if (type === 'attributes'){
            console.log(`The ${attributeName} attribute was modified.`);
        }
    })

};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing observer.disconnect();