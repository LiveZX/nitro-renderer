import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { SeasonalCalendarDailyOfferMessageParser } from '../../parser';

export class SeasonalCalendarDailyOfferMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, SeasonalCalendarDailyOfferMessageParser);
    }

    public getParser(): SeasonalCalendarDailyOfferMessageParser
    {
        return this.parser as SeasonalCalendarDailyOfferMessageParser;
    }
}
