import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { LoveLockFurniStartParser } from '../../../parser/room/furniture/LoveLockFurniStartParser';

export class LoveLockFurniStartEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, LoveLockFurniStartParser);
    }

    public getParser(): LoveLockFurniStartParser
    {
        return this.parser as LoveLockFurniStartParser;
    }
}
