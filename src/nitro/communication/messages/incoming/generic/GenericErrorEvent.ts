import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GenericErrorParser } from '../../parser/generic/GenericErrorParser';

export class GenericErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GenericErrorParser);
    }

    public getParser(): GenericErrorParser
    {
        return this.parser as GenericErrorParser;
    }
}
