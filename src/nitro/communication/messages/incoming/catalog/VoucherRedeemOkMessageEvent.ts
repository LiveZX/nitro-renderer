import { IMessageEvent, MessageEvent } from '@nitrots/api';
import { VoucherRedeemOkMessageParser } from '../../parser/catalog/VoucherRedeemOkMessageParser';

export class VoucherRedeemOkMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, VoucherRedeemOkMessageParser);
    }

    public getParser(): VoucherRedeemOkMessageParser
    {
        return this.parser as VoucherRedeemOkMessageParser;
    }
}
