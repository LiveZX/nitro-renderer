import { IFigurePartSet } from './figure/IFigurePartSet';
import { IPalette } from './figure/IPalette';
import { ISetType } from './figure/ISetType';
import { Palette } from './figure/Palette';
import { SetType } from './figure/SetType';
import { IFigureSetData } from './IFigureSetData';
import { IStructureData } from './IStructureData';

export class FigureSetData implements IFigureSetData, IStructureData
{
    private _palettes: Map<string, Palette>;
    private _setTypes: Map<string, SetType>;

    constructor()
    {
        this._palettes  = new Map();
        this._setTypes  = new Map();
    }

    public dispose(): void
    {

    }

    public parse(data: any): boolean
    {
        if(!data) return false;

        for(const palette of data.colors[0].palette)
        {
            const newPalette = new Palette(palette);

            if(!newPalette) continue;

            this._palettes.set(newPalette.id.toString(), newPalette);
        }

        for(const set of data.sets[0].settype)
        {
            const newSet = new SetType(set);

            if(!newSet) continue;

            this._setTypes.set(newSet.type, newSet);
        }

        return true;
    }

    public injectXML(k: any): void
    {
        for(const _local_2 of k.sets[0].settype)
        {
            const setType = this._setTypes.get(_local_2['$'].type);

            if(setType)
            {
                setType.cleanUp(_local_2);
            }
            else
            {
                this._setTypes.set(_local_2['$'].type, new SetType(_local_2));
            }
        }

        this.appendXML(k);
    }

    public appendXML(k: any): boolean
    {
        if(!k) return false;

        for(const _local_2 of k.colors[0].palette)
        {
            const id        = _local_2['$'].id.toString();
            const _local_4  = this._palettes.get(id);

            if(!_local_4)
            {
                this._palettes.set(id, new Palette(_local_2));
            }
            else
            {
                _local_4.append(_local_2);
            }
        }

        for(const _local_3 of k.sets[0].settype)
        {
            const type      = _local_3['$'].type;
            const _local_5  = this._setTypes.get(type);

            if(!_local_5)
            {
                this._setTypes.set(type, new SetType(_local_3));
            }
            else
            {
                _local_5.append(_local_3);
            }
        }

        return false;
    }

    public getMandatorySetTypeIds(k: string, _arg_2: number): string[]
    {
        const types: string[] = [];

        for(const set of this._setTypes.values())
        {
            if(!set || !set.isMandatory(k, _arg_2)) continue;

            types.push(set.type);
        }

        return types;
    }

    public getDefaultPartSet(k: string, _arg_2: string): IFigurePartSet
    {
        const setType = this._setTypes.get(k);

        if(!setType) return null;

        return setType.getDefaultPartSet(_arg_2);
    }

    public getSetType(k: string): ISetType
    {
        return (this._setTypes.get(k) || null);
    }

    public getPalette(k: number): IPalette
    {
        return (this._palettes.get(k.toString()) || null);
    }

    public getFigurePartSet(k: number): IFigurePartSet
    {
        for(const set of this._setTypes.values())
        {
            const partSet = set.getPartSet(k);

            if(!partSet) continue;

            return partSet;
        }

        return null;
    }
}
