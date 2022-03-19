import { IMessageParser } from '.';
import { IConnection } from '..';

export interface IMessageEvent
{
    dispose(): void;
    callBack: Function;
    parserClass: Function;
    parser: IMessageParser;
    connection: IConnection;
}
