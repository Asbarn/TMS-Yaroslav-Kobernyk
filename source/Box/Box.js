
import styles from './styles.css'

export class Box {
    constructor(text) {
        this.node = document.createElement("div");
        this.node.classList.add(styles.container);
        this.node.innerHTML = text;
    }
    render() {
        return this.node
    }
}
