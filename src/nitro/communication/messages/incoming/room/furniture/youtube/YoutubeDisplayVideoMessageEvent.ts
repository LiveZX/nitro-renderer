import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { YoutubeDisplayVideoMessageParser } from '../../../../parser/room/furniture/youtube/YoutubeDisplayVideoMessageParser';

export class YoutubeDisplayVideoMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, YoutubeDisplayVideoMessageParser);
    }

    public getParser(): YoutubeDisplayVideoMessageParser
    {
        return this.parser as YoutubeDisplayVideoMessageParser;
    }
}
