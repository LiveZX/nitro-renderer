﻿import { RoomSessionEvent } from 'nitro-renderer/src/nitro/session/events/RoomSessionEvent';
import { IRoomSession } from 'nitro-renderer/src/nitro/session/IRoomSession';

export class RoomSessionPollEvent extends RoomSessionEvent
{
    public static OFFER: string = 'RSPE_POLL_OFFER';
    public static ERROR: string = 'RSPE_POLL_ERROR';
    public static CONTENT: string = 'RSPE_POLL_CONTENT';

    private _id: number = -1;
    private _headline: string;
    private _summary: string;
    private _numQuestions: number = 0;
    private _startMessage: string = '';
    private _endMessage: string = '';
    private _questionArray: string[] = null;
    private _npsPoll: boolean = false;

    constructor(k: string, _arg_2: IRoomSession, _arg_3: number)
    {
        super(k, _arg_2);

        this._id = _arg_3;
    }

    public get id(): number
    {
        return this._id;
    }

    public get headline(): string
    {
        return this._headline;
    }

    public set headline(k: string)
    {
        this._headline = k;
    }

    public get summary(): string
    {
        return this._summary;
    }

    public set summary(k: string)
    {
        this._summary = k;
    }

    public get numQuestions(): number
    {
        return this._numQuestions;
    }

    public set numQuestions(k: number)
    {
        this._numQuestions = k;
    }

    public get startMessage(): string
    {
        return this._startMessage;
    }

    public set startMessage(k: string)
    {
        this._startMessage = k;
    }

    public get endMessage(): string
    {
        return this._endMessage;
    }

    public set endMessage(k: string)
    {
        this._endMessage = k;
    }

    public get questionArray(): string[]
    {
        return this._questionArray;
    }

    public set questionArray(k: string[])
    {
        this._questionArray = k;
    }

    public get npsPoll(): boolean
    {
        return this._npsPoll;
    }

    public set npsPoll(k: boolean)
    {
        this._npsPoll = k;
    }
}
