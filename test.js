let movie = {
    movieName: 'Harry Potter & The Goblet of Fire',
    runTime: 157,
    genre: 'Fantasy/Mystery',
    characters: [{
            name: "Harry Potter",
            age: 14,
            items: [{
                item1: "Wand",
                item2: "Invisibilty Cloak"
            }]
        },
        {
            name: "Hermione Granger",
            age: 15,
            items: [{
                item1: "Book",
                item2: "Time Turner"
            }]
        },
    ],
}
console.log(movie.movieName);
console.log(movie.runTime);
console.log(movie.characters);
console.log(movie.characters[1].name);
console.log(movie.characters[0].items[0].item2);