import { IDisposable } from '@nitrots/api';

export interface IProductDataListener extends IDisposable
{
    loadProductData(): void;
}
