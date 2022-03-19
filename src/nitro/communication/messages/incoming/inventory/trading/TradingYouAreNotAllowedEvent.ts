﻿import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { TradingYouAreNotAllowedParser } from '../../../parser/inventory/trading/TradingYouAreNotAllowedParser';

export class TradingYouAreNotAllowedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TradingYouAreNotAllowedParser);
    }

    public getParser(): TradingYouAreNotAllowedParser
    {
        return this.parser as TradingYouAreNotAllowedParser;
    }
}
