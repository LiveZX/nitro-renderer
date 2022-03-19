import { IMessageDataWrapper, IMessageParser } from '@nitrots/api';

export class FurniturePostItStickyPoleOpenParser implements IMessageParser
{
    private _itemId: number;

    public flush(): boolean
    {
        this._itemId = 0;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._itemId = parseInt(wrapper.readString());

        return true;
    }

    public get furnitureId(): number
    {
        return this._itemId;
    }
}
