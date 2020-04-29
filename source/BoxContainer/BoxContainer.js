import styles from './styles.css'

export class BoxContainer {
    constructor() {
        this.node = document.createElement("div")
        this.node.classList.add(styles.container);

    }
    clear() {
        this.node.innerHTML = "";
    }
    appendChild(child) {
        this.node.appendChild(child)
    }
    render() {
        return this.node
    }

}