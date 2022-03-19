import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { TradingConfirmationParser } from '../../../parser/inventory/trading/TradingConfirmationParser';

export class TradingConfirmationEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TradingConfirmationParser);
    }

    public getParser(): TradingConfirmationParser
    {
        return this.parser as TradingConfirmationParser;
    }
}
