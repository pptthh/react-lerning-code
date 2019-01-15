enum searchByEnum {
    TITLE = 'title',
    GENRE = 'genres',
}

export default searchByEnum;

export const SearchByRestTranslator = {
    [searchByEnum.TITLE]: searchByEnum.TITLE,
    [searchByEnum.GENRE]: searchByEnum.GENRE,
};
