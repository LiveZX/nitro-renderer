import { IMessageComposer } from '@nitrots/api';

export class GroupBadgesComposer implements IMessageComposer<ConstructorParameters<typeof GroupBadgesComposer>>
{
    private _data: ConstructorParameters<typeof GroupBadgesComposer>;

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
