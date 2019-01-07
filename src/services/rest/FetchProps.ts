interface FetchProps <T>{
    success?: (data: T) => void;
    fail?: (... msg: unknown[]) => void;
    request: string;
    id?: number;
}
export default FetchProps;