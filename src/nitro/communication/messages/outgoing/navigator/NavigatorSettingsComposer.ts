import { IMessageComposer } from '@nitrots/api';

export class NavigatorSettingsComposer implements IMessageComposer<ConstructorParameters<typeof NavigatorSettingsComposer>>
{
    private _data: ConstructorParameters<typeof NavigatorSettingsComposer>;

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
