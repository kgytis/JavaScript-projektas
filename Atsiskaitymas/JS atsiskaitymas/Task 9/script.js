/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */


class Movie {
    constructor(
        title,
        director,
        budget
    ) {
      this.title = title;
      this.director = director;
      this.budget = budget;  
      this.wasExpensive()
    }
    wasExpensive = () => {
        let palyginimas = this.budget > 100000000 ? true : false
        console.log(palyginimas)
    }
}

let filmas = new Movie("Spider-Man: No Way Home", "Jon Watts", 2000000000)