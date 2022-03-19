import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { UserCreditsParser } from '../../../../parser/user/inventory/currency/UserCreditsParser';

export class UserCreditsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserCreditsParser);
    }

    public getParser(): UserCreditsParser
    {
        return this.parser as UserCreditsParser;
    }
}
