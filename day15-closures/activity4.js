// Activity 4: Module Pattern

// Task 6
const itemManager = (() => {

    let items = [];

    const addItem = (item) => {
        items.push(item);
        console.log(`Item "${item}" added.`);
    };

    const removeItem = () => {
        items.pop()
    };

    const listItems = () => {
        console.log('Current items:', items);
    };


    return {
        addItem,
        removeItem,
        listItems
    };
})();

itemManager.addItem('Apple');      
itemManager.addItem('Banana');
itemManager.addItem('Grapes');
itemManager.addItem('Peach');
itemManager.listItems();      
itemManager.removeItem();  
itemManager.addItem('Cherry');
itemManager.listItems();   
itemManager.removeItem();  
