import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { EpicPopupMessageParser } from '../../parser/quest/EpicPopupMessageParser';

export class EpicPopupMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, EpicPopupMessageParser);
    }

    public getParser(): EpicPopupMessageParser
    {
        return this.parser as EpicPopupMessageParser;
    }
}
