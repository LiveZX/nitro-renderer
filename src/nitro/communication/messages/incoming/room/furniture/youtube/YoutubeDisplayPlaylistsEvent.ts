import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { YoutubeDisplayPlaylistsMessageParser } from '../../../../parser/room/furniture/youtube/YoutubeDisplayPlaylistsMessageParser';

export class YoutubeDisplayPlaylistsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, YoutubeDisplayPlaylistsMessageParser);
    }

    public getParser(): YoutubeDisplayPlaylistsMessageParser
    {
        return this.parser as YoutubeDisplayPlaylistsMessageParser;
    }
}
