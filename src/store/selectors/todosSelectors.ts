import { RootState } from '../index';

const todosSelector = ({ todos }: RootState) => todos;

export default todosSelector;
