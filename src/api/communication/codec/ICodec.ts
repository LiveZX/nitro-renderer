import { IBinaryWriter } from '.';
import { IConnection, IMessageDataWrapper } from '..';

export interface ICodec
{
    encode(header: number, messages: any[]): IBinaryWriter;
    decode(connection: IConnection): IMessageDataWrapper[];
}
