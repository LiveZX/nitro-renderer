import { NitroEvent } from '@nitrots/api';

export class RoomCameraWidgetManagerEvent extends NitroEvent
{
    public static INITIALIZED: string = 'RCWM_INITIALIZED';

    constructor(type: string)
    {
        super(type);
    }
}
