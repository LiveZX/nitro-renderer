import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { FloorHeightMapMessageParser } from '../../../parser/room/mapping/FloorHeightMapMessageParser';

export class FloorHeightMapEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FloorHeightMapMessageParser);
    }

    public getParser(): FloorHeightMapMessageParser
    {
        return this.parser as FloorHeightMapMessageParser;
    }
}
