import { IDisposable, INitroLogger } from '.';
import { IEventDispatcher } from '..';

export interface INitroManager extends IDisposable
{
    init(): void;
    logger: INitroLogger;
    events: IEventDispatcher;
    isLoaded: boolean;
    isLoading: boolean;
}
