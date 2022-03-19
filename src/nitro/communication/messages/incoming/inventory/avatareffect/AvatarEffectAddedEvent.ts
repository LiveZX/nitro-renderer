﻿import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { AvatarEffectAddedParser } from '../../../parser/inventory/avatareffect/AvatarEffectAddedParser';

export class AvatarEffectAddedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AvatarEffectAddedParser);
    }

    public getParser(): AvatarEffectAddedParser
    {
        return this.parser as AvatarEffectAddedParser;
    }
}
