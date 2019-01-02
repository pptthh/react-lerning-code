interface FetchProps <T>{
    success?: (data: T) => void;
    fail?: (... msg: unknown[]) => void;
    request: string;
}
export default FetchProps;