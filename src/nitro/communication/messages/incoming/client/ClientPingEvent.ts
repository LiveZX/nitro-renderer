import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ClientPingParser } from '../../parser/client/ClientPingParser';

export class ClientPingEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ClientPingParser);
    }

    public getParser(): ClientPingParser
    {
        return this.parser as ClientPingParser;
    }
}
