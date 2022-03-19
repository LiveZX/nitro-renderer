import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { LoadGameUrlParser } from '../../parser/game/LoadGameUrlParser';

export class LoadGameUrlEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, LoadGameUrlParser);
    }

    public getParser(): LoadGameUrlParser
    {
        return this.parser as LoadGameUrlParser;
    }
}
