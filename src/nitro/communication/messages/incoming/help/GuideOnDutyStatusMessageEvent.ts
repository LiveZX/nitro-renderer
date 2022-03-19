import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GuideOnDutyStatusMessageParser } from '../../parser/help/GuideOnDutyStatusMessageParser';

export class GuideOnDutyStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideOnDutyStatusMessageParser);
    }

    public getParser(): GuideOnDutyStatusMessageParser
    {
        return this.parser as GuideOnDutyStatusMessageParser;
    }
}
