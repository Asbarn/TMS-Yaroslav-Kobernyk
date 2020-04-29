import {Store,Box,Form,BoxContainer } from './source'


const boxContainer = new BoxContainer();
const form = new Form();
const store = new Store();

form.onChange(text => {
    store.changeInputText(text)
});

form.onSubmit(text => {
    store.add(text)
});

store.onChange(filteredData => {
    if(filteredData.length) {
        form.changeToSearch()
    } else {
        form.changeToAdd()
    }

    boxContainer.clear();
    filteredData.forEach(text => {
        const box = new Box(text).render()
        boxContainer.appendChild(box)
    });
});

document.body.appendChild(form.render());
document.body.appendChild(boxContainer.render());
