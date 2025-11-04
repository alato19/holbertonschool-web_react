import { fromJS } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  if (!object || !Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  const nested = fromJS(object);

  return nested.getIn(array);
}
