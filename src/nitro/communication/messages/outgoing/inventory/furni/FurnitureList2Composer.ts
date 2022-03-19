import { IMessageComposer } from '@nitrots/api';

export class FurnitureList2Composer implements IMessageComposer<ConstructorParameters<typeof FurnitureList2Composer>>
{
    private _data: ConstructorParameters<typeof FurnitureList2Composer>;

    constructor()
    {
        this._data = [];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
