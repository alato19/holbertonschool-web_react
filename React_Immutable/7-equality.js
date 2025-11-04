import { Map, is } from './node_modules/immutable/dist/immutable';

export default function areMapsEqual(map1, map2) {
  const newMap1 = Map(map1);
  const newMap2 = Map(map2);
  return is(newMap1, newMap2);
}
