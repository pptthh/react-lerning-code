enum SortBy{
    RELEASE_DATE = 'release date',
    RATING = 'rating',
    VOTES = '#votes',
    BUDGET = 'budget',
    RUNTIME = 'runtime',
}

export default SortBy;

export const SortByRestTranslator = {
    [SortBy.RELEASE_DATE]: 'release_date',
    [SortBy.RATING]: 'vote_average',
    [SortBy.VOTES]: 'vote_count',
    [SortBy.BUDGET]: 'budget',
    [SortBy.RUNTIME]: 'runtime',
}
