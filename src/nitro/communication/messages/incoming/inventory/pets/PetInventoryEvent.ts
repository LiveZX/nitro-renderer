import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { PetInventoryParser } from '../../../parser/inventory/pets/PetInventoryParser';

export class PetInventoryEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetInventoryParser);
    }

    public getParser(): PetInventoryParser
    {
        return this.parser as PetInventoryParser;
    }
}
