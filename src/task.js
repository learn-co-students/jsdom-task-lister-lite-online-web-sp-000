class Task {
  constructor(description){
    this.description = description;
  }

  show(){
    return `<li>${this.description}<button data-description="${this.description}">x</button></li>`;
  }
}

