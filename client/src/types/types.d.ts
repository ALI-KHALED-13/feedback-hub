declare module 'types' {
  export interface IProduct {
    _id: number;
    title: string;
    owner: IUser;
    contributers: IUser[];
    feedback: IFeedback[];
  };

  export interface IUser {
    _id: string;
    name: string;
    email: string;
    pfp: string[];
    products: IProduct[];
    feedbackHistory: IFeedback[];
    commentsHistory: string[];
    upvotesHistory: string[];
    activated: boolean;
  };

  export interface IFeedback {
    _id: number;
    title: string;
    description: string;
    upvotes: string[];
    comments: string[];
    targetProduct: string;
    owner: string;
    tags: string[];
  };

  export interface ITag {
    _id: number;
    name: string;
  };

  export interface IStatus {
    _id: number;
    name: string;
    reviewsNumber: number;
    color: string;
  };  
};
