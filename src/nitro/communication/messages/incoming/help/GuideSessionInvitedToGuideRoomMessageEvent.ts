import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { GuideSessionInvitedToGuideRoomMessageParser } from '../../parser/help/GuideSessionInvitedToGuideRoomMessageParser';

export class GuideSessionInvitedToGuideRoomMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionInvitedToGuideRoomMessageParser);
    }

    public getParser(): GuideSessionInvitedToGuideRoomMessageParser
    {
        return this.parser as GuideSessionInvitedToGuideRoomMessageParser;
    }
}
