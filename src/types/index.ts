export type CartType = {
  id: number;
  title: string;
  src: string;
  type: string;
  room: string;
  date: string;
  price: string;
};

export type slidesPlacesType = {
  id: number;
  src: string;
  title: string;
};

export type ReviewerType = {
  id?: number;
  src: string;
  title: string;
  text: string;
};
