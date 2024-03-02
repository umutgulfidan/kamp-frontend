import { ResponseModel } from "./responseModel";

export interface ListResponseModel<TData> extends ResponseModel{
    data : TData[]
}