import { IAssetColor, IAssetGesture, IAssetPosture, IAssetVisualAnimation, IAssetVisualizationDirection, IAssetVisualizationLayer } from '.';

export interface IAssetVisualizationData
{
    size?: number;
    layerCount?: number;
    angle?: number;
    layers?: { [index: string]: IAssetVisualizationLayer };
    colors?: { [index: string]: IAssetColor };
    directions?: { [index: string]: IAssetVisualizationDirection };
    animations?: { [index: string]: IAssetVisualAnimation };
    defaultPosture?: string;
    postures?: { defaultPosture?: string, postures?: IAssetPosture[] };
    gestures?: IAssetGesture[];
}
