import { Seq } from './node_modules/immutable/dist/immutable';

export default function printBestStudents(obj) {
  const newSeq = Seq(obj);

  const filtered = newSeq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const newObj = filtered.toJS();

  Object.keys(newObj).map((key) => {
    newObj[key].firstName = capitalize(newObj[key].firstName);
    newObj[key].lastName = capitalize(newObj[key].lastName);
    return newObj[key];
  });

  console.log(newObj);
}
