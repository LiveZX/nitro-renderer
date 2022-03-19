import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { PetRemovedFromInventoryParser } from '../../../parser/inventory/pets/PetRemovedFromInventoryParser';

export class PetRemovedFromInventory extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetRemovedFromInventoryParser);
    }

    public getParser(): PetRemovedFromInventoryParser
    {
        return this.parser as PetRemovedFromInventoryParser;
    }
}
