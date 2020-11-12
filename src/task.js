class Task {
    constructor(description){
        this.description = description;
    }

    render() {
        // render <li> element. NOTE back ticks
        return `
        <li>
            ${this.description}
            <button data-description="${this.description}">X</button>
        </li>
        `;
           // later, for delete add <button>
    }
}

// inside TaskList is how we create a Task. aka makes the has_many belongs_to relationship 
        // only place to create a Task is inside of TaskList