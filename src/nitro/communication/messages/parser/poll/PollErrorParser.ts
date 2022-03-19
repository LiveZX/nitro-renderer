import { IMessageDataWrapper } from '@nitrots/api';
import { IMessageParser } from '../../../../../core/communication/messages/IMessageParser';

export class PollErrorParser implements IMessageParser
{
    flush(): boolean
    {
        throw true;
    }

    parse(wrapper: IMessageDataWrapper): boolean
    {
        return true;
    }
}
