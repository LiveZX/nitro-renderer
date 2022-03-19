import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CameraStorageUrlMessageParser } from '../../parser/camera/CameraStorageUrlMessageParser';

export class CameraStorageUrlMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CameraStorageUrlMessageParser);
    }

    public getParser(): CameraStorageUrlMessageParser
    {
        return this.parser as CameraStorageUrlMessageParser;
    }
}
