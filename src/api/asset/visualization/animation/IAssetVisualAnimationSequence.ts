import { IAssetVisualAnimationSequenceFrame } from '.';

export interface IAssetVisualAnimationSequence
{
    loopCount?: number;
    random?: number;
    frames?: { [index: string]: IAssetVisualAnimationSequenceFrame };
}
