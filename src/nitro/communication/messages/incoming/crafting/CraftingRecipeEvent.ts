import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { CraftingRecipeMessageParser } from '../../parser/crafting/CraftingRecipeMessageParser';

export class CraftingRecipeEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CraftingRecipeMessageParser);
    }

    public getParser(): CraftingRecipeMessageParser
    {
        return this.parser as CraftingRecipeMessageParser;
    }
}
