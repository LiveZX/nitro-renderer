import { IGraphicAssetCollection } from '@nitrots/api';
import { IRoomObjectVisualization } from './IRoomObjectVisualization';

export interface IRoomObjectGraphicVisualization extends IRoomObjectVisualization
{
    asset: IGraphicAssetCollection;
}
