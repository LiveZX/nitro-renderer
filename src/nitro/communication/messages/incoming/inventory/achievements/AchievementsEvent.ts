﻿import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { AchievementsParser } from '../../../parser/inventory/achievements/AchievementsParser';

export class AchievementsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AchievementsParser);
    }

    public getParser(): AchievementsParser
    {
        return this.parser as AchievementsParser;
    }
}
