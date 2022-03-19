import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GiftWrappingConfigurationParser } from '../../parser';

export class GiftWrappingConfigurationEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GiftWrappingConfigurationParser);
    }

    public getParser(): GiftWrappingConfigurationParser
    {
        return this.parser as GiftWrappingConfigurationParser;
    }
}
