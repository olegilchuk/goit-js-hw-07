
const navEl = document.querySelectorAll('#categories .item');
navEl.forEach(caregoryEl => {
  console.log (`
		Категория: ${caregoryEl.firstElementChild.textContent}
		Количество элементов: ${caregoryEl.firstElementChild.nextElementSibling.children.length}
	`);
});

