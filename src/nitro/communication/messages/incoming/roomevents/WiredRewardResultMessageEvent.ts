import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { WiredRewardResultMessageParser } from '../../parser/roomevents/WiredRewardResultMessageParser';

export class WiredRewardResultMessageEvent extends MessageEvent implements IMessageEvent
{
    public static PRODUCT_DONATED_CODE: number = 6;
    public static BADGE_DONATED_CODE: number = 7;

    constructor(callBack: Function)
    {
        super(callBack, WiredRewardResultMessageParser);
    }

    public getParser(): WiredRewardResultMessageParser
    {
        return this.parser as WiredRewardResultMessageParser;
    }
}
