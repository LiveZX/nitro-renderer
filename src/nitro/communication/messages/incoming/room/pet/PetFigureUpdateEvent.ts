import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { PetFigureUpdateParser } from '../../../parser/room/pet/PetFigureUpdateParser';

export class PetFigureUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetFigureUpdateParser);
    }

    public getParser(): PetFigureUpdateParser
    {
        return this.parser as PetFigureUpdateParser;
    }
}
