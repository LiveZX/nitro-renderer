import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { PerkAllowancesMessageParser } from './../../parser/perk/PerkAllowancesMessageParser';

export class PerkAllowancesMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PerkAllowancesMessageParser);
    }

    public getParser(): PerkAllowancesMessageParser
    {
        return this.parser as PerkAllowancesMessageParser;
    }
}
