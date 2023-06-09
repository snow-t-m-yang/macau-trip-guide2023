export type DayInfo = {
  place: string;
  image: string;
  description: string[];
  id: string;
};

export type CheckListType = {
  id: string;
  item: string;
  checked: boolean;
};

export type CardProps = {
  place: string;
  image: string;
  description: string[];
};

export type InfoType = {
  name: string;
  description: string;
  url: string;
  id: string;
};
