
import styles from './styles.css'

export class Form {
    constructor() {
        this.form = document.createElement('form')
        this.form.setAttribute('class', styles.container)

        this.input = document.createElement('input')
        this.input.setAttribute('class', styles.input)

        this.button = document.createElement('button')
        this.button.setAttribute('class', styles.button)
        this.button.innerHTML = 'Search'
    }


    onChange(listener) {
        this.input.addEventListener('input', () => {
            listener(this.input.value);
        })
    }

    onSubmit(listener) {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            listener(this.input.value);
        })
    }

    changeToAdd() {
        this.button.innerHTML = 'Add';
    }

    changeToSearch() {
        this.button.innerHTML = 'Search';
    }


    render() {
        this.form.appendChild(this.input);
        this.form.appendChild(this.button);
        return this.form;
    }
}
