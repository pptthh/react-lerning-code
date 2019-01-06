import Movies, { validateMovies, EmptyMovieList, transformMoviesData } from "./movie";



describe('movie tests:', () => {
    const testMovieList:Movies = {total: 0, offset: 0, limit: 0, data:[{
        id: 8388,
        title: "¡Three Amigos!",
        tagline: "They're Down On Their Luck And Up To Their Necks In Senoritas, Margaritas, Banditos And Bullets!",
        vote_average: 6.2,
        vote_count: 327,
        release_date: "1986-12-12",
        release_year: '',
        poster_path: "https://image.tmdb.org/t/p/w500/zuTwahw966MoFwD7B2SFujaT5yp.jpg",
        overview: "Three unemployed actors accept an invitation to a Mexican village to replay their bandit fighter roles, unaware that it is the real thing.",
        budget: 25000000,
        revenue: 0,
        genres:  ["Comedy", "Western"],
        runtime: 102
    }]};

    it('transformMoviesData', () => {
        expect(
            transformMoviesData(testMovieList).data[0].release_year
        ).toEqual("1986");
    });

    it('validateMovies', () => {
        validateMovies(EmptyMovieList);
    });

});
