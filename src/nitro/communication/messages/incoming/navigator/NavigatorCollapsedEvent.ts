import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { NavigatorCollapsedParser } from '../../parser/navigator/NavigatorCollapsedParser';

export class NavigatorCollapsedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NavigatorCollapsedParser);
    }

    public getParser(): NavigatorCollapsedParser
    {
        return this.parser as NavigatorCollapsedParser;
    }
}
