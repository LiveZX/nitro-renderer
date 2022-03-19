import { IMessageComposer } from '@nitrots/api';
import { ClientDeviceCategoryEnum } from '../../../../../api/communication/connections/enums/ClientDeviceCategoryEnum';
import { ClientPlatformEnum } from '../../../../../api/communication/connections/enums/ClientPlatformEnum';
import { NitroVersion } from '../../../../../core';

export class ClientHelloMessageComposer implements IMessageComposer<ConstructorParameters<typeof ClientHelloMessageComposer>>
{
    private _data: ConstructorParameters<typeof ClientHelloMessageComposer>;

    constructor(releaseVersion: string, type: string, platform: number, category: number)
    {
        this._data = [ NitroVersion.RENDERER_VERSION, 'HTML5', ClientPlatformEnum.HTML5, ClientDeviceCategoryEnum.BROWSER ];
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
