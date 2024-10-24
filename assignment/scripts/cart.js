console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// Empty Basket Array
let basket = [];
console.log('Here is my empty basket', basket);
// addItem function
function addItem(newItem){
    let item = basket.push(newItem);
    return true;
}
addItem("apple");
addItem("watermelon")
addItem("Coconut")
console.log('After shopping my basket has more items in it, ', basket);

function listItems(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
        return;
}
listItems(basket);
addItem("Blueberries");
addItem("Twizzlers");
addItem("Gummy Bears")
listItems(basket);
console.log(basket)
console.log(basket.length)
function empty(){
    while( basket.length > 0){
        basket.pop()
    }
    return basket;
}
empty();
console.log(basket);




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
