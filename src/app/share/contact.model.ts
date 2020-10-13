export interface IContact {
  id?: number;
  name?: string;
  email?: string;
  phoneNumber?: string;
}
export class Contact implements IContact {
  constructor(
    public id?: number,
    public name?: string,
    public email?: string,
    public phoneNumber?: string,
  ) {
  }
}
