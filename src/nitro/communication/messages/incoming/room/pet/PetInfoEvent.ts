import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { PetInfoParser } from '../../../parser/room/pet/PetInfoParser';

export class PetInfoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetInfoParser);
    }

    public getParser(): PetInfoParser
    {
        return this.parser as PetInfoParser;
    }
}
