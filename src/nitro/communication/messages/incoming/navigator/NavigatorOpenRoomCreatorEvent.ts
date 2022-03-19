import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { NavigatorOpenRoomCreatorParser } from '../../parser/navigator/NavigatorOpenRoomCreatorParser';

export class NavigatorOpenRoomCreatorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NavigatorOpenRoomCreatorParser);
    }

    public getParser(): NavigatorOpenRoomCreatorParser
    {
        return this.parser as NavigatorOpenRoomCreatorParser;
    }
}
