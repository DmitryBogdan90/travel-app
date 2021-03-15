export interface Rate {
  rate: number;
  user: string;
  _id: string;
}

export interface Sight {
  description: string;
  img: string;
  name: string;
  rates: Rate[];
}

export interface Country {
  capital: string;
  name: string;
  info: string;
  img: string;
  _id: string;
  sights: Sight[];
}
