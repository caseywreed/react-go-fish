export function removeByKey(myObj, deleteKey) {
return Object.keys(myObj)
    .filter(key => key !== deleteKey)
    .reduce((result, current) => {
    result[current] = myObj[current];
    return result;
    }, {})
}

export function getRandomKey(keyArr) {
    return keyArr[Math.floor(Math.random() * keyArr.length)]
}