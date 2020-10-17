let obj = {
  'pupa': {
    'lupa': {
      'beep': 'boop',
    },
    'foo': 'bar',
  },
};

function getObjectProperty (obj, path, defaultValue = undefined)  {
 
  let result = obj

  for (item of path.split('.')) {
    if (result) {
      result = result[item]
    } else {
       return defaultValue
    }
  }

  return result

}

console.log(getObjectProperty(obj, "pupa.lupa"))
console.log(getObjectProperty(obj, "pupa.lupa.beep"))
console.log(getObjectProperty(obj, "pupa.foo"))
console.log(getObjectProperty(obj, "pupa.ne.tuda"))
console.log(getObjectProperty(obj, "pupa.ne.tuda", true))
console.log(getObjectProperty(obj, "pupa.ne.tuda", "Default value"))

