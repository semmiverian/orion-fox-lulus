// 'aku tidak alay'

// '4k2 t1d4k 4l4y

function alayGenerator(string) {
  var vocal = 'aiueo'
  var alay = '41230'
  var result = ''

  for (var i = 0; i < string.length; i++) {
    var isAlay = false
    for (var j = 0; j < vocal.length; j++) {
      if (string[i] == vocal[j]) {
        isAlay = true
        result += alay[j]
      } 
    }
    if (isAlay == false) {
      result += string[i]
    }

  }

  return result
}

function toUpperCase(string) {
  return string.toUpperCase()
}

function addExclamationMark(string) {
  return string += '!'
}

// var stringAlay = alayGenerator('aku tidak alay')
// var alayUpper = toUpperCase(stringAlay)
// console.log(addExclamationMark(alayUpper))

console.log(addExclamationMark(toUpperCase(alayGenerator('aku tiday alay'))))
