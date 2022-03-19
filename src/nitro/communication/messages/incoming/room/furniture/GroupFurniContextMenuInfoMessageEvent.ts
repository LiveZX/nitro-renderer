import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GroupFurniContextMenuInfoMessageParser } from '../../../parser/room/furniture/GroupFurniContextMenuInfoMessageParser';

export class GroupFurniContextMenuInfoMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GroupFurniContextMenuInfoMessageParser);
    }

    public getParser(): GroupFurniContextMenuInfoMessageParser
    {
        return this.parser as GroupFurniContextMenuInfoMessageParser;
    }
}
