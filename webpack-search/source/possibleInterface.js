// import { Form } from './Form'
// import { Box } from './Box'
// import { Store } from './Store'
// import { BoxContainer } from './BoxContainer'

// const store = new Store()
// const form = new Form()
// const boxContainer = new BoxContainer()

// form.onChange(text => {
//     store.setFilterText(text)
// })

// form.onSubmit((text) => {  
//     store.add(text)
// })

// store.onChange(filteredData => {
//     if(filteredData.length === 0) {
//         form.changeButtonToAdd()
//     } else {
//         form.changeButtonToSearch()
//     }

//     boxContainer.clear()
    
//     filteredData.forEach(text => {
//         const box = new Box(text)
//         boxContainer.appendChild(box.render())
//     })
// })


// document.body.appendChild(form.render())
// document.body.appendChild(boxContainer.render())
