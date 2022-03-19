import { IDisposable } from '@nitrots/api';

export interface IUpdateReceiver extends IDisposable
{
    update(time: number): void;
}
