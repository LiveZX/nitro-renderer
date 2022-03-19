import { IAssetColorLayer } from '.';

export interface IAssetColor
{
    layers?: { [index: string]: IAssetColorLayer };
}
