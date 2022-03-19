import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GuideReportingStatusMessageParser } from './../../parser/help/GuideReportingStatusMessageParser';

export class GuideReportingStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideReportingStatusMessageParser);
    }

    public getParser(): GuideReportingStatusMessageParser
    {
        return this.parser as GuideReportingStatusMessageParser;
    }
}
