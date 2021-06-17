const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.createElement('ul');

const ingrElems = ingredients.map(item => {
  const itemList = document.createElement('li');
  itemList.textContent = item;
  return itemList;
});

document.body.append(...ingrElems);