export interface User {
  id: string,
  name: string,
  picture: string,
  phone_umber: number,
  email: string,
  hire_date?: Date,
  manager_id: string,
}
