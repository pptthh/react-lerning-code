import { Request, Response } from 'express';

interface ServerState {
    isServer: boolean;
    props?: {
        req: Request;
        res: Response;
    };
}
export default ServerState;
