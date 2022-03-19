import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomSettingsUsersListParser } from '../../../parser/room/data/RoomSettingsUsersListParser';

export class RoomUsersWithRightsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomSettingsUsersListParser);
    }

    public getParser(): RoomSettingsUsersListParser
    {
        return this.parser as RoomSettingsUsersListParser;
    }
}
