import { IConnection, IConnectionStateListener } from '.';
import { IDisposable } from '..';

export interface ICommunicationManager extends IDisposable
{
    createConnection(stateListener?: IConnectionStateListener): IConnection;
}
