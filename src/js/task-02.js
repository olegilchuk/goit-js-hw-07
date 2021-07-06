const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];


const list = document.querySelector('#ingredients');

const makeIngredients = options => {
  return options.map(option => {
    const elList = document.createElement('li');
    elList.textContent = option;
    return elList;
  
  });

};

const elements = makeIngredients(ingredients);
list.append(...elements);

