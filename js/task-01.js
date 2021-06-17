const navEl = document.querySelector('ul');

const navItemEl = navEl.children;
console.log(`В списке ${navItemEl.length} категории.`);

[...navItemEl].forEach((li) => {
    const titleItem = li.querySelector('h2');
    console.log(`Категория: ${titleItem.textContent}`);
    const navItemElSublist = li.querySelector('ul');
    const navItemElSublistElem = navItemElSublist.children;
    console.log(`Количество элементов: ${navItemElSublistElem.length}`);
});