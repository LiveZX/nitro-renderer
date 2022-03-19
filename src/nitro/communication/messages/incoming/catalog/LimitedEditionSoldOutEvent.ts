import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { LimitedEditionSoldOutParser } from '../../parser';

export class LimitedEditionSoldOutEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, LimitedEditionSoldOutParser);
    }

    public getParser(): LimitedEditionSoldOutParser
    {
        return this.parser as LimitedEditionSoldOutParser;
    }
}
