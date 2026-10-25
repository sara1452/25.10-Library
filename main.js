class MediaItem {
    constructor(title, year, genre) {
        this.title = title
        this.year = year
        this.genre = genre
    }
    getSummary() {
        return;
    }
}
class Book extends MediaItem {
    constructor(title, year, genre, author, pageCount) {
        super(title, year, genre)
        this.author = author
        this.pageCount = pageCount
    }
    getSummary() {
        return (`${this.title} by ${this.author} ${this.pageCount} pages`);
    }
}
console.log(new Book("Dune", 2012, "erty", "Frank Herbet", 412).getSummary())
class Movie extends MediaItem {
    constructor(title, year, genre, director, durationMinutes) {
        super(title, year, genre)
        this.director = director
        this.durationMinutes = durationMinutes
    }
    getSummary() {
        return `movie ${this.title} directed by ${this.director} ${this.durationMinutes} min`
    }
}
console.log(new Movie("Dune", 2012, "ftgy", "Denis", 155).getSummary());
class Library {
    constructor() {
        this.arr = []
    }
    addItem(item) {
        this.arr.push(item)
    }
    search(term) {
        return this.arr.filter(x => x.title.toLowerCase().includes(term.toLowerCase()));
    }
    listByGenre(genre) {
        return this.arr.filter(x => x.genre=== genre);
    }

}
const lib = new Library();
lib.addItem(new Book("Dune", "Frank Herbert", 1965, "Sci-Fi", 412));
lib.addItem(new Movie("Dune", "Denis Villeneuve", 2021, "Sci-Fi", 155));

console.log(lib.search("dune"));
console.log(lib.listByGenre("Sci-Fi"));
