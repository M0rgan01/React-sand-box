import { RootState } from '../index';

// eslint-disable-next-line
export const isOverlayOpenSelector = ({ mainInformation }: RootState) => mainInformation.isOverlayOpen;
