export enum REQ_STATUS {
  success = "success",
  failed = "failed",
  lackData = "lackData",
  none = "none"
}

export interface IRequestBody {
  type: string;
  name: string;
  email: string;
 }