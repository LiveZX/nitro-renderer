﻿import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { TradingAcceptParser } from '../../../parser/inventory/trading/TradingAcceptParser';

export class TradingAcceptEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TradingAcceptParser);
    }

    public get userID(): number
    {
        return this.getParser().userID;
    }

    public get userAccepts(): boolean
    {
        return this.getParser().userAccepts;
    }

    public getParser(): TradingAcceptParser
    {
        return this.parser as TradingAcceptParser;
    }
}
