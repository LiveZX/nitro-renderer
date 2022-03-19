import { NitroEvent } from '@nitrots/api';

export class RoomToObjectEvent extends NitroEvent
{
    public constructor(type: string)
    {
        super(type);
    }
}
