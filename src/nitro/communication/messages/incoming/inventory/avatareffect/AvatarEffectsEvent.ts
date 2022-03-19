import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { AvatarEffectsParser } from '../../../parser/inventory/avatareffect/AvatarEffectsParser';

export class AvatarEffectsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AvatarEffectsParser);
    }

    public getParser(): AvatarEffectsParser
    {
        return this.parser as AvatarEffectsParser;
    }
}
