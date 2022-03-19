import { IDisposable } from '@nitrots/api';

export interface IAvatarEffectListener extends IDisposable
{
    resetEffect(effect: number): void;
}
