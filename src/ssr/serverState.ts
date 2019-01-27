import { NextFunction, Request, Response } from 'express';

interface ServerState {
    req: Request;
    res: Response;
    next: NextFunction;
}
export default ServerState;
