export type ObjStrCustom<T> = {
  [key: string]: T;
};

export type ObjStrCommon = {
  [key: string]: boolean | number | string;
};

export type QueryReturnHead = {
  locales: {
    edges: {
      node: {
        data: string;
        language: string;
        ns: string;
      }
    }[]
  }
};

export type SelectOption = {
  label: string;
  value: string;
  key?: string;
};

export type Day = {
  key: number;
  name: string;
  number: string;
};

export type Month = {
  days: Day[];
  name: string;
  number: string;
};

export type Year = {
  number: number;
  months: Month[];
};

export type Meta = {
  name?: string;
  content: string;
  property?: string;
};
