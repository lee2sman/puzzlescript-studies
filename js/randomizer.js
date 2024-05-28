// Get all lists with randomize class
const lists = document.querySelectorAll('.randomize');

// Loop through lists
for (list of lists) {
    let list_ul = list.querySelector('ul');
    // Create an array from the list items
    let list_items = Array.from(list.querySelectorAll('li'));

    // Shuffle the array of list items
    let shuffled_items = shuffle(list_items);

    // Remove the old list items from the list
    list_ul.innerHTML = '';

    // Loop through the randomized list items
    for (item of shuffled_items) {
        let li = document.createElement('li');
        li.innerHTML = item.innerHTML;
        // Append each list item to the list
        list_ul.appendChild(li);
    }
}

// Shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }