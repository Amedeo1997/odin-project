function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read
}

Book.prototype.info = function() {
    return `${this.title} of ${this.author}, ${this.page} page, ${this.read ? 'read' : 'not read yet'}`;
}

const theLordOfTheRings = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
console.log(theLordOfTheRings.info());

const noiSiamoInfinito = new Book('Noi siamo infinito', 'Stephen Chbosky', 271, true);
console.log(noiSiamoInfinito.info())
console.log(noiSiamoInfinito.title);

function Dog(razza, pelo, taglia) {
    this.razza = razza;
    this.pelo = pelo;
    this.taglia = taglia;
    this.abbaia = function() {
        console.log(`${razza} fa wof wof`);
    }
}

const labrador = new Dog('Labrador', 'Pelo Lungo', 'Taglia Grande');
const jackRussel = new Dog('Jack Russel', 'Pelo corto', 'Taglia piccola');

console.log(labrador, labrador.abbaia(), jackRussel);
