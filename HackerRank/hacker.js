
// function simpleArraySum(ar){
// 	var d=ar.reduce((a,b)=> {
// 		return a+b
// 	},0)
// 	return d
// }
// var list = [1,2,3,4,5,6,7,8,9,10]
// console.log(simpleArraySum(list))



// function compareTriplets(a, b) {
//     var c=0;
//     var d=0;
//     for (i in a){
//         if (a[i]>b[i]){
//             c+=1
//         }
//         if (a[i]<b[i]){
//             d+=1
//         }
//     }
//     return ([c,d]) 
// }
// var l1=[5,6,7]
// var l2=[3,6,10]
// console.log(compareTriplets(l1,l2))




// var list=[[11, 2, 4],
// [4, 5, 6],
// [10, 8, -12]]
// var a=list.length-1;
// var d1=0;
// var d2=0;
// for (var i=0; i<list.length;i++){
//     d1+=list[i][i]
//     d2+=list[i][a-i]
// }
// if (d1>d2){
//     console.log(d1-d2)
// }else{
//     console.log(d2-d1)
// }



// function plusMinus(arr){
// 	var a=0;
// 	var b=0;
// 	var c=0;
// 	var d=arr.length
// 	for (var i of arr){
// 	    if (i>0){
// 	        a+=1
// 	    }
// 	    if(i<0){
// 	        b+=1
// 	    }if(i===0){
// 	        c+=1
// 	    }
// 	}
// 	return [a/d,b/d,c/d]
// }
// var arr=[-4, 3, -9, 0, 4, 1]
// console.log(plusMinus(arr))



// var n=8;
// for (var i=1; i<=n; i++){
// 	if (n<50){
// 		console.log(" ".repeat(n-i)+'#'.repeat(i))
//     }else{
//         console.log("#".repeat(i)+' '.repeat(n-1))
//     }
// }


// var arr=[7,69,2,221,8974]
// var a1=[]
// for (var i=0;i in arr; i++){
// 	var list=arr.slice()
// 	list.splice(i,1)
// 	var a=0
// 	for (var j of list){
// 		a+=j	
// 	}
// 	a1.push(a)
// }
// a1.sort()
// console.log(a1[0],a1[arr.length-1])



// var ar=[3,2,1,3]
// var ar1=ar.sort()
// var dic={}
// for (var i of ar1){
// 	if (i==c){
// 		dic[i]+=1
// 	}else{
// 		dic[i]=1
// 	}
// 	var c=i
// }
// for (var i of dic.value()){
// 	console.log(i)
// }
// // console.log(dic)



// function birthdayCakeCandles(ar){
// 	var ar1=ar.sort()
//     var dic={}
//     var d=0
//     for (var i of ar1){
//         if (i==c){
//             dic[i]+=1
//             if (dic[i]>0){
//                 d=dic[i]
//             }
//         }else{
//             dic[i]=1
//         }
//         var c=i
//     }
//     return d
// }
// var ar=[3,2,1,3]
// console.log(birthdayCakeCandles(ar))



// var s='12:45:54PM'
// if (s.slice(-2)=='PM'){
// 	if (s.slice(0,2)!='12'){
// 		var b = parseInt(s.slice(0,2))+12
// 		var c=s.replace(s.slice(0,2),b)
// 		console.log(s.slice(0,-2))
// 	}else{
// 		console.log(s.slice(0,-2))
// 	}
// }else{
// 	if (s.slice(0,2)=='12'){
// 		var b='00'
// 		var c=s.replace(s.slice(0,2),b)
// 		console.log(s.slice(0,-2))
// 	}else{
// 		console.log(s.slice(0,-2))
// 	}
// }


// function vowelsAndConsonants(s){
//     let vowel = 'aeiou';
// 	for (i of s){
// 		if (vowel.includes(i)){
// 			console.log(i)
// 		}
// 	}
// 	for (i of s){
// 		if (!vowel.includes(i)){
// 			console.log(i)
// 		}
// 	}
// }
// var s='javascriptloops'
// console.log(vowelsAndConsonants(s))


// function regexVar(str) {
//     let re=false
//     let s='aeiou'
//     let b=str.split('')
//     if (s.includes(b[0])){
//         if (b[0]==b[b.length-1]){
//             re=true
//         }
//     }
//     return re;
// }
// var str='abci'
// console.log(regexVar(str))



// function reverseString(s) {
    // var s1 = s.split('').reverse().join('')
    // return s1
// }
// var a='1234'
// console.log(reverseString(a))



// function factorial(s){
//     let multi=1;
//     for (var i=s; 0<i;i--){
//         multi=multi*i
//     }
//     return multi
// }
// console.log(factorial(4))


// ------------------------------------------------------------------------------------------------------------------------------------------------


function getSecondLargest(nums) {
	let largest = nums[0];
    let secondLargest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            continue;
        }
        if ((nums[i] > secondLargest) && (nums[i] < largest)) {
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}
var list=[1,2,3,4,6,6,5]
console.log(getSecondLargest(list))


// function migratoryBirds(arr) {
// 	arr.sort()
// 	var dict={}
// 	var c;
// 	for (var i of arr){
// 		if(i==c){
// 			dict[i]+=1
// 		}
// 		else{
// 			dict[i]=1
// 		}
// 		c=i
// 	}
	
// }
// var list=[1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
// console.log(migratoryBirds(list))





