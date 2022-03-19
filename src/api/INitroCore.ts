import { IAssetManager, ICommunicationManager, IConfigurationManager, IDisposable } from '.';

export interface INitroCore extends IDisposable
{
    configuration: IConfigurationManager;
    asset: IAssetManager;
    communication: ICommunicationManager;
}
