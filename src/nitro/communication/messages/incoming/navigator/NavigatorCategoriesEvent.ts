import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { NavigatorCategoriesParser } from '../../parser/navigator/NavigatorCategoriesParser';

export class NavigatorCategoriesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NavigatorCategoriesParser);
    }

    public getParser(): NavigatorCategoriesParser
    {
        return this.parser as NavigatorCategoriesParser;
    }
}
