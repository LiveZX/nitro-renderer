import { IDisposable } from '@nitrots/api';

export interface IAvatarImageListener extends IDisposable
{
    resetFigure(figure: string): void;
}
