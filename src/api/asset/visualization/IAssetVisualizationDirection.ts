import { IAssetVisualizationLayer } from '.';

export interface IAssetVisualizationDirection
{
    layers?: { [index: string]: IAssetVisualizationLayer };
}
