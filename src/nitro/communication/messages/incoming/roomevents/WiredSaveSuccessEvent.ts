import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { WiredSaveSuccessParser } from '../../parser/roomevents/WiredSaveSuccessParser';

export class WiredSaveSuccessEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredSaveSuccessParser);
    }

    public getParser(): WiredSaveSuccessParser
    {
        return this.parser as WiredSaveSuccessParser;
    }
}
