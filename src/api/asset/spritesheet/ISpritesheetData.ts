import { ISpritesheetData as PixiSpritesheet } from '@pixi/spritesheet';
import { ISpritesheetMeta } from '.';

export interface ISpritesheetData extends PixiSpritesheet
{
    meta: ISpritesheetMeta;
}
