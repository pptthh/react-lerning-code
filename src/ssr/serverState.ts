import { Request, Response } from 'express';

interface ServerState {
    isServer: boolean;
    promis?: Promise<unknown>;
    props?: {
        req: Request;
        res: Response;
    };
}
export default ServerState;
