import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { RoomVisualizationSettingsParser } from '../../../parser/room/mapping/RoomVisualizationSettingsParser';

export class RoomVisualizationSettingsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomVisualizationSettingsParser);
    }

    public getParser(): RoomVisualizationSettingsParser
    {
        return this.parser as RoomVisualizationSettingsParser;
    }
}
