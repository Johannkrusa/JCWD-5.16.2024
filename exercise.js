// ======= exercise =======

// query 1 
// Create a function to convert Excel sheet column title to its corresponding column number.

function convertColumn(str){
    tempStr= str.toUpperCase();
    result = 0;
    for (var i = 0; i < tempStr.length; i++) {
        result += (26*i)+ (tempStr.charCodeAt(i) - 64);
    }
    return result;
}

var str = "ZB";

console.log(convertColumn(str));


// query 2
// Given a non-empty array of integers nums, every element appears twice except for one. Find that
// single one.

function uniqueNumber(arr){
    result = [];
    for(var i = 0; i <= arr.length-1; i++){
        isFound = false;
        for(var j = 0; j <= arr.length-1; j++){
            if(i !== j && arr[i] == arr[j]){
                isFound = true;
                break;
            }
        }
        if (!isFound){
            result.push(arr[i]);
        }
    }
    return result;
}

arr = [1,2,1,2,4,5,6]

console.log(uniqueNumber(arr));

// query 3
// ● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

function isAnagram(s, t){
    if (s.length !== t.length){
        return false;
    }
    s = s.toLowerCase();
    t = t.toLowerCase();

    var result1 = [];
    var result2 = [];
    for(var i = 0; i <= s.length -1; i++){
        result1.push(s[i]);
        result2.push(t[i]);
    }
    result1 = result1.sort();
    result2 = result2.sort();
    for(var i = 0; i <= result1.length -1; i++){
        if (result1[i] !== result2 [i]){
            return false;
        }
    }
    return true;
}

var s = "anAgraam";
var t = "Naagrama";

console.log(isAnagram(s, t))

// query 4
// n(1)=1, n(2)=2,    n(3)=3,       n(4)=5.    n(5)=8.    n(6) = 13    n(7) = 21
// n(1)=1, n(2)+n(1), n(n2)+ n(n1), n(3)+n(2)  n(4)+n(3)  n(5) + n(4)  n(6)+n(5);

function climbStairs(n){
    var prev1 = 1;
    var prev2= 1;
    var curr = 1;
    for(var i = 2; i<= n; i++){
        curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return curr;
}

console.log(climbStairs(10));