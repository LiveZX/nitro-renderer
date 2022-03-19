import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { PetReceivedMessageParser } from '../../../parser/inventory/pets/PetReceivedMessageParser';

export class PetReceivedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetReceivedMessageParser);
    }

    public getParser(): PetReceivedMessageParser
    {
        return this.parser as PetReceivedMessageParser;
    }
}
