enum sortByEnum {
    RELEASE_DATE = 'release date',
    RATING = 'rating',
    VOTES = '#votes',
    BUDGET = 'budget',
    RUNTIME = 'runtime',
}

export default sortByEnum;

export const SortByRestTranslator = {
    [sortByEnum.RELEASE_DATE]: 'release_date',
    [sortByEnum.RATING]: 'vote_average',
    [sortByEnum.VOTES]: 'vote_count',
    [sortByEnum.BUDGET]: 'budget',
    [sortByEnum.RUNTIME]: 'runtime',
};
