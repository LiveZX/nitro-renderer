import { IConnection, IMessageEvent, INitroManager } from '@nitrots/api';
import { NitroCommunicationDemo } from './demo/NitroCommunicationDemo';

export interface INitroCommunicationManager extends INitroManager
{
    registerMessageEvent(event: IMessageEvent): IMessageEvent;
    removeMessageEvent(event: IMessageEvent): void;
    demo: NitroCommunicationDemo;
    connection: IConnection;
}
