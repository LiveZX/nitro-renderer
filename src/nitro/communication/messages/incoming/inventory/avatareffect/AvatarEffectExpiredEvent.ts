import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { AvatarEffectExpiredParser } from '../../../parser/inventory/avatareffect/AvatarEffectExpiredParser';

export class AvatarEffectExpiredEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AvatarEffectExpiredParser);
    }

    public getParser(): AvatarEffectExpiredParser
    {
        return this.parser as AvatarEffectExpiredParser;
    }
}
