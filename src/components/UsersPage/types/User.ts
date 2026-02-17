interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolacation: {
    lat: string;
    long: string;
  };
}

export default interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: Address;
  phone: string;
}
