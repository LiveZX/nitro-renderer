import { IMessageDataWrapper } from '.';

export interface IMessageParser
{
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
