﻿import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { TradingCloseParser } from '../../../parser/inventory/trading/TradingCloseParser';

export class TradingCloseEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TradingCloseParser);
    }

    public get userID(): number
    {
        return this.getParser().userID;
    }

    public getParser(): TradingCloseParser
    {
        return this.parser as TradingCloseParser;
    }
}
