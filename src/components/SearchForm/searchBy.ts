enum searchByEnum {
    TITLE = 'title',
    GERNE = 'gerne',
}

export default searchByEnum;

export const SearchByRestTranslator = {
    [searchByEnum.TITLE]: searchByEnum.TITLE,
    [searchByEnum.GERNE]: searchByEnum.GERNE,
};
