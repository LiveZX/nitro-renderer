import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { WiredValidationErrorParser } from '../../parser/roomevents/WiredValidationErrorParser';

export class WiredValidationErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredValidationErrorParser);
    }

    public getParser(): WiredValidationErrorParser
    {
        return this.parser as WiredValidationErrorParser;
    }
}
