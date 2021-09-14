﻿import { IMessageDataWrapper, IMessageParser } from '../../../../../../core';
import { RoomDimmerPresetsMessageData } from '../../../incoming/room/furniture/RoomDimmerPresetsMessageData';

export class RoomDimmerPresetsMessageParser implements IMessageParser
{
    private _selectedPresetId: number;
    private _presets: RoomDimmerPresetsMessageData[];

    constructor()
    {
        this._selectedPresetId = 0;
        this._presets = [];
    }

    public flush(): boolean
    {
        this._presets = [];

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        const totalPresets = wrapper.readInt();

        this._selectedPresetId = wrapper.readInt();

        for(let i = 0; i < totalPresets; i++)
        {
            const presetId = wrapper.readInt();
            const bgOnly = (wrapper.readInt() === 2);
            const color = wrapper.readString();
            const brightness = wrapper.readInt();

            this._presets.push(new RoomDimmerPresetsMessageData(presetId, bgOnly, color, brightness));
        }

        return true;
    }

    public getPreset(id: number): RoomDimmerPresetsMessageData
    {
        if((id < 0) || (id >= this.presetCount)) return null;

        return this._presets[id];
    }

    public get presetCount(): number
    {
        return this._presets.length;
    }

    public get selectedPresetId(): number
    {
        return this._selectedPresetId;
    }
}
