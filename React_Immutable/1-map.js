import { Map } from './node_modules/immutable/dist/immutable';

const getImmutableObject = (object) => {
  const newObj = Map(object);
  return newObj;
};

export default getImmutableObject;
