import { responseModel } from "./responseModel";

export interface ListResponseModel<TData> extends responseModel{
    data : TData[]
}