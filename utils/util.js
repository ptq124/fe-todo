function tagsToArray(tags) {
  // ['favorite', 'like'] -> 'favorite', 'like'
  return tags.substring(1, tags.length - 1).split(",");
}

function makeRandomId() {
  return Math.floor(Math.random() * 100001);
}

function 과목과아이디만드는문자열(statusArray) {
  return statusArray
    .map((obj) => [obj.name, obj.id])
    .map((d) => `'${d[0]}, ${d[1]}'`)
    .join(", ");
}

function 소문자변경(str) {
  return str.toLowerCase();
}

export { 과목과아이디만드는문자열, tagsToArray, makeRandomId, 소문자변경 };
