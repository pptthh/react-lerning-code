export interface Movie {
    id: number, // 8388,
    title: string, // "¡Three Amigos!",
    tagline: string, // "They're Down On Their Luck And Up To Their Necks In Senoritas, Margaritas, Banditos And Bullets!",
    vote_average: number, // 6.2,
    vote_count: number, // 327,
    release_date: string,// "1986-12-12",
    poster_path: string, // "https://image.tmdb.org/t/p/w500/zuTwahw966MoFwD7B2SFujaT5yp.jpg",
    overview: string, // "Three unemployed actors accept an invitation to a Mexican village to replay their bandit fighter roles, unaware that it is the real thing.",
    budget: number, // 25000000,
    revenue: number, // 0,
    genres: string[], // ["Comedy", "Western"],
    runtime: number, // 102
}

interface Movies {
    data: Movie[],
    total: number,
    offset: number,
    limit: number,
}

export default Movies;