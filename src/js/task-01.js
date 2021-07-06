const navEl = document.querySelector(".item");

const elHad = navEl.firstElementChild;
const elList = navEl.lastElementChild;
console.log(
  `Категория: ${elHad.textContent};`,
  `Количество элементов: ${elList.children.length};`
);

const elHade = navEl.nextElementSibling.firstElementChild;
const elListe = navEl.nextElementSibling.firstElementChild.nextElementSibling;
console.log(
  `Категория: ${elHade.textContent};`,
  `Количество элементов: ${elListe.children.length};`
);

const elHada = navEl.nextElementSibling.nextElementSibling.firstElementChild;
const elLista =
  navEl.nextElementSibling.nextElementSibling.firstElementChild
    .nextElementSibling;
console.log(
  `Категория: ${elHada.textContent};`,
  `Количество элементов: ${elLista.children.length};`
);
