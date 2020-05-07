function sortData(myData) {
    myData.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    });
}


export class Store {
    constructor() {
        this.data = [
            'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'delete', 'new', 'array', 'number'
        ],
            this.inputText,
            this.change,
            this.filteredData = this.data
    }



    add(text) {
        this.data.push(text);
        if (this.inputText != null) {
            this.filteredData = this.data.filter(text => text.includes(this.inputText));
        }
        sortData(this.filteredData);
        this.change(this.filteredData);

    }

    onChange(listener) {
        this.change = (listener);
        if (this.inputText != null) {
            this.filteredData = this.data.filter(text => text.includes(this.inputText));
        }
        sortData(this.filteredData);
        this.change(this.filteredData);
    }

    changeInputText(newText) {
        this.inputText = newText;
        this.filteredData = this.data.filter(text => text.includes(this.inputText));
        sortData(this.filteredData);
        this.change(this.filteredData);
    }
}