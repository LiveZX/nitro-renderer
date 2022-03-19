﻿import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { AvatarEffectActivatedParser } from '../../../parser/inventory/avatareffect/AvatarEffectActivatedParser';

export class AvatarEffectActivatedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AvatarEffectActivatedParser);
    }

    public getParser(): AvatarEffectActivatedParser
    {
        return this.parser as AvatarEffectActivatedParser;
    }
}
