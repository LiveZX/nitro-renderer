import { IMessageDataWrapper, IMessageParser } from '@nitrots/api';
import { RoomModerationData } from '../../incoming/moderation/RoomModerationData';

export class ModeratorRoomInfoMessageParser implements IMessageParser
{
    private _data:RoomModerationData;

    public flush(): boolean
    {
        this._data = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._data = new RoomModerationData(wrapper);

        return true;
    }

    public get data():RoomModerationData
    {
        return this._data;
    }
}
