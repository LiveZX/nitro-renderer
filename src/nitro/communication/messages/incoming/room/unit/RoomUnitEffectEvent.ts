import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomUnitEffectParser } from '../../../parser/room/unit/RoomUnitEffectParser';

export class RoomUnitEffectEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitEffectParser);
    }

    public getParser(): RoomUnitEffectParser
    {
        return this.parser as RoomUnitEffectParser;
    }
}
