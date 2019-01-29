import { Request, Response } from 'express';

interface ServerState {
    isServer: boolean;
    callBack?: (html: string) => void;
    props?: {
        req: Request;
        res: Response;
    };
}
export default ServerState;
