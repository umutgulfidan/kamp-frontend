import { ResponseModel } from "./responseModel";

export interface SingleResponseModel<TData> extends ResponseModel{
    data:TData
}