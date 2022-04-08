import { RootState } from '../index';

// eslint-disable-next-line
export const mainLoadingSelector = ({ mainInformation }: RootState) => mainInformation.loading;
