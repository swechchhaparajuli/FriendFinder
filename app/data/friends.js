
var friends = [
    {
    "name":"Swechchha",
    "photo": "",
    "scores": [
        1,
        3,
        4,
        5,
        3,
        4,
        5,
        3,
        2,
        1
    ]
    },
    {
        "name": "Lara",
        "photo": "",
        "scores": [
            1,
            3,
            4,
            5,
            3,
            4,
            5,
            3,
            2,
            1
        ]
    }
];


function compatabilityCheck(){
    var currUser = friends[friends.length-1];
    var arrayOfSums = [];
    friends.forEach(element => { 
        for(var i = 0; i<currUser.score.length-1; i++){
            var temp = math.Abs(currUser.score[i] - element.score[i]);
            arrayOfSums.push(temp);
        }
    });
    return friends[findLowest(arrayOfSums)];
}

function findLowest(array){
    var lowest = 0;
    for(var i = 0; i<array.length-2; i++){
        if(array[0]<array[lowest]){
            lowest = i;
        }
    }
    return array[lowest]
}

module.exports = friends;
module.exports = compatabilityCheck();