let shoppingListItems = ["milk", "eggs", "bread"];

// Here we grab the ul from the HTML
let listElement = document.getElementById("shopping-list-items");

for (const shoppingListItem of shoppingListItems) {
    console.log(shoppingListItem);
    // We create a list element
    let itemElement = document.createElement("li");

    // Add the inner text to the list element
    itemElement.innerText = shoppingListItem;

    // Add the list element to the ul
    listElement.appendChild(itemElement);
}

const addItem = () => {
    // Get the input field element
    let input = document.getElementById("new-item-text");
    
    // Get the trimmed value of the input field
    let item = input.value.trim();

    // Check if the input is not empty
    if (item) {
        // Add the new item to the shopping list array
        shoppingListItems = [...shoppingListItems, item];
        
        // Update the displayed list
        updateItems();
        
        // Clear the input field
        input.value = '';
    }
};

const updateItems = () => {
    // First we get the list element
    let listElement = document.getElementById("shopping-list-items");
    // Then we clear it of any existing items
    listElement.innerHTML = "";
    // Then we loop through the shopping list items and add them to the list
    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
};

const clearList = () => {
    shoppingListItems = [];
    updateItems();
};

document.getElementById("clear-button").addEventListener("click", clearList);