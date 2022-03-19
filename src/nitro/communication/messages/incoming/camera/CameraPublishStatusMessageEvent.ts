import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CameraPublishStatusMessageParser } from '../../parser/camera/CameraPublishStatusMessageParser';

export class CameraPublishStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CameraPublishStatusMessageParser);
    }

    public getParser(): CameraPublishStatusMessageParser
    {
        return this.parser as CameraPublishStatusMessageParser;
    }
}
