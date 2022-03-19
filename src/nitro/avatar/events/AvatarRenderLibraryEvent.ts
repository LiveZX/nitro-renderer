import { NitroEvent } from '@nitrots/api';
import { AvatarAssetDownloadLibrary } from '../AvatarAssetDownloadLibrary';

export class AvatarRenderLibraryEvent extends NitroEvent
{
    public static DOWNLOAD_COMPLETE: string = 'ARLE_DOWNLOAD_COMPLETE';

    private _library: AvatarAssetDownloadLibrary;

    constructor(type: string, library: AvatarAssetDownloadLibrary)
    {
        super(type);

        this._library = library;
    }

    public get library(): AvatarAssetDownloadLibrary
    {
        return this._library;
    }
}
