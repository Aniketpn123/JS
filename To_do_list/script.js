let add = document.getElementById('itemInput');
let items = document.getElementById('items');
let valueEnter = add.value;

function addItem() {
  let valueEnter = add.value;
  items.innerHTML += valueEnter;

  add.value='';
}
