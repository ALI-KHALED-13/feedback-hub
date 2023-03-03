declare module 'types' {
  export interface IProduct {
    id: number;
    name: string;
  };

  export interface IFeedback {
    id: number;
    title: string;
    description: string;
  };

  export interface ITag {
    id: number;
    name: string;
    reviewsNumber?: number;
  };

  export interface IStatus {
    id: number;
    name: string;
    reviewsNumber: number;
    color: string;
  };
};
