console.log('Live Enabled')

// function add(a,b){   //Function declearation
//     return a+b
// }
// console.log(add(3,4))
//....................................................//
// let sum = function(a,b){   // Function Expression
//     return a+b
// }
// console.log(sum(5,5))
//...................................................//
// let Fun = (a,b)=>{     // Arrow Function
//     return a+b 
// }
// console.log(Fun(8,7))
//..................................................//


// create a function that takes an array and returns the
// sum of all the values in the array. [4,2,3,7,9]

// let arr = [4,2,3,7,9]
// let SumOfArray = (arr)=>{
//     let bag = 0
//     for(let i=0; i<arr.length; i++){
//         bag+=arr[i]
//     }
//     return bag
// }
// console.log(SumOfArray(arr))



// create function which takes firstName and LastName and 
// greet users as Hello firstName LastName ,Welcome.

// let greet = (firstName,lastName)=>`Hello ${firstName} ${lastName}, Welcome`
// console.log(greet('Aham','Singh'))



// Destructure.

// let Mobile = {
//     title : 'Vivo',
//     ram : '30gb',
//     apps : ['camera','playstore','facebook'],
//     features : ['facelock','fingerprint','voicerecognizer']
// }

// let {title, ram, apps, features} = Mobile
// console.log(apps)
// console.log(features[1])


// Given an object destruct it...

// let user = {
//     userName : 'Aham',
//     userDesignation : 'Manager',
//     skills : {
//         softSkills : ['leadership','communication'],
//         techSkiils : ['react','js','html','css']
//     },
//     hobby : 'playing Guitar'
// }

// let {userName, userDesignation, skills, skills:{softSkills,techSkiils},hobby} = user

// console.log(userDesignation)
// console.log(skills)
// console.log(softSkills)
// console.log(techSkiils[1])
// console.log(hobby)




// Spreading...

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]

// let fin = [...arr1,...arr2]
// console.log(fin)

// let obj1 = {
//     a : 1,
//     b : 2
// }
// let obj2 = {
//     c : 3,
//     d : 4
// }

// let fin = {...obj1,...obj2, e : 5}
// console.log(fin)



// ternary operators 

// let blood = 'O1'
// let bloodTest =(blood)=>
//             blood==='A'? 'A type blood' : 
//             blood==="B"? 'B type blood':
//             blood==='O'? 'O type blood' : 
//             'Not found Blood Type'

//  console.log(bloodTest(blood))




// Clousers....

// function Outer(){
//     let count = 0
//     function Inner(){
//         count++
//         return (count)
//     }
//     return Inner
// }
// let res = Outer()
// console.log(res())
// console.log(res())
// console.log(res())



// Higher Order Functions.....


// forEach()..........

// let arr = [1,2,3,4,5]
// arr.forEach((ele,i,arr)=>{
//     console.log(ele)
// })


// map()...............

// let arr = [1,2,3,4,5,6,7,8,9]

// let double = arr.map((ele,i,arr)=>{
//     return ele*2
// })
// console.log(double)
// console.log(arr)


// filter()............

// let arr = [1,2,3,4,5,6,7,8,9]
// let narr = arr.filter((ele,i,arr)=>{
//     return ele%2===0
// })
// console.log(narr)



// let arr = [1,2,3,4,5,6,7,8,9]
// let narr = arr.filter((ele,i,arr)=>{
//     return ele%2===1
// })
// console.log(narr)



// let arr = ['apple','orange','banana','grapes']

// function SearchFruits(fruit,arr){
//     let narr = arr.filter((ele,i,arr)=>{
//         return ele===fruit
//     })
//     if(narr.length>=1){
//         console.log(`Yes ${narr} is found`)
//     }else{
//         console.log('Not found')
//     }
//     // console.log(narr)
// }
// SearchFruits('orange',arr)


// reduce(acc,curr).......


// let arr = [3,4,4,1,6,8,3,8]

// let narr = arr.reduce((acc,curr)=>{
//     return acc = acc+curr
// })
// console.log(narr)


// let narr = arr.reduce((acc,curr)=>{
//     return acc = acc+curr
// }, "")
// console.log(narr)


// let freq = ['a','b','a','f','b','g']
// let count = freq.reduce((acc,curr)=>{
//     if(acc[curr]){
//         acc[curr]++
//     }else{
//         acc[curr]=1
//     }
//     return acc
// },{})
// console.log(count)


// JSON()....................


// let classroom = [
//     {
//         id : 12,
//         name : 'Raju'
//     },
//     {
//         id : 17,
//         name : 'kaju'
//     }
// ]
// let test = JSON.stringify(classroom)
// console.log(test)



// thsis keyboards........

// let cal = {
//     a : 10,
//     b : 20,
//     add : function (){
//         console.log(this.a + this.b)
//     },
    
// }
// cal.add()



let intervalId = setInterval(() => {
  console.log("Repeating task");
}, 1000);

clearInterval(intervalId);
