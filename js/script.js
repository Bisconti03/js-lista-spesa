const items = ['Pane','Pasta','Tovaglioli','Deodorante','Caffè'];

const itemsList = document.getElementById('items')

let i = 0; 
while (i < items.length) {  

    itemsList.innerHTML += `<li>${items[i]}</li>`;

    const newLi = document.createElement('li');
    newLi.innerHTML = items[i];
    

    i++; 
    
}    