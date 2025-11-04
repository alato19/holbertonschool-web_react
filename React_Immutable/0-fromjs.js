import { fromJS } from './node_modules/immutable/dist/immutable';

const getImmutableObject = (object) => {
  const map = fromJS(object);
  return map;
};

export default getImmutableObject;
