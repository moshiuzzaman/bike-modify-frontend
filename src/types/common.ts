export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};


export type IUser = {
  id?:number |null|string;
  name?:string |null;
  email?:string |null;
  password?:string |null;
  role?:string |null;
  address?:string |null;
  image?:string |null;
  token?:string |null;
}