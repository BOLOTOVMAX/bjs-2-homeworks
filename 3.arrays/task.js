function compareArrays(arr1, arr2) {
    if( arr1.length === arr2.length && arr1.every((a, b) => a === arr2[b])){
        console.log(true)
            return true;
        } else {
        console.log(false)
            return false
        };
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user => gender === user.gender)
    .map(user => user.age)
    .reduce((summator,age,index,userAges) => summator + age/userAges.length, 0)
}