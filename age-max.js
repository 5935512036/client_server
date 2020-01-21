person = [

    {name :"rim" ,age :21} ,
    {name :"mang" , age :22},
    {name :"fee" , age :23},
    {name :"mas" , age :24},
    {name :"fa" , age :26}

]

var arr=[]

for ( i in person) {

    arr[i] = person[i].age
}

for (key in person){

    person[key].age == (math.max(...arr))
}