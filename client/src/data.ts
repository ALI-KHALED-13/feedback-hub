import { IStatus } from 'types';
import { colors } from './GlobalStyles';

const { peach, violet, blue } = colors;

export const statuses: IStatus[] = [
  {
    _id: 1,
    name: 'Planned',
    reviewsNumber: 2,
    color: peach,
  },
  {
    _id: 2,
    name: 'In-Progress',
    reviewsNumber: 3,
    color: violet,
  },
  {
    _id: 3,
    name: 'Live',
    reviewsNumber: 1,
    color: blue,
  },
];

export const sortingOptions = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];
