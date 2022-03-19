import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { ObjectsDataUpdateParser } from '../../../parser/room/engine/ObjectsDataUpdateParser';

export class ObjectsDataUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ObjectsDataUpdateParser);
    }

    public getParser(): ObjectsDataUpdateParser
    {
        return this.parser as ObjectsDataUpdateParser;
    }
}
