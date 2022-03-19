import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomSettingsErrorParser } from '../../../parser/room/data/RoomSettingsErrorParser';

export class RoomSettingsErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomSettingsErrorParser);
    }

    public getParser(): RoomSettingsErrorParser
    {
        return this.parser as RoomSettingsErrorParser;
    }
}
