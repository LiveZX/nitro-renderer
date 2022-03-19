import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { UserCurrencyParser } from '../../../../parser/user/inventory/currency/UserCurrencyParser';

export class UserCurrencyEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserCurrencyParser);
    }

    public getParser(): UserCurrencyParser
    {
        return this.parser as UserCurrencyParser;
    }
}
