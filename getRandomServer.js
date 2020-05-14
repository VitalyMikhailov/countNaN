function getServer(obj){
    let count=0;
    for (let key in obj){
        count+=obj[key]
    }

    for (let key in obj){
        obj[key] = Math.round((100/(count))*obj[key]);
    }


    let arrLetters = [];

    for (let key in obj){
        for (let j = 1; j <= obj[key]; j++){
            arrLetters.push(key)
        }
    }
    let chance = Math.trunc(Math.random()*100);
    return arrLetters[chance];

}

function homeWork(obj){
    let arr = []
    for (let i = 1; i<=100; i++){
        arr.push(getServer(obj));
    }
    for (let key in obj){
        obj[key]=0;
    }

    for (let i = 0; i <arr.length; i++){
        for (let key in obj){
            if (arr[i]===key) obj[key]++;
        }

    }


    return [arr, obj];
}

console.log(homeWork({A:1,B:2,C:3,D:1}));