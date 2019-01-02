interface FetchProps <T>{
    success?: (data: T) => void;
    fauil?: (... msg: unknown[]) => void;
    request: string;
}
export default FetchProps;