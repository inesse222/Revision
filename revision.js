// Revision|| While & For loops, Recursion

//1-----

function iterate(n){

    for(var i=0 ; i<=n ; i++){
        
 if ( i%2===0){
    console.log(i + "is even" )}
        else 
     console.log(i+"is odd") } }




function iterate(n){
    var i=0
        while( i<=n){
        
 if ( i%2===0){
    console.log(i + "is even" )}
        else 
     console.log(i+"is odd") 
      i++  }
}

//2-----

function iterateAndLogWithFor (x) {
    for (var i=x ;i>=0 ; i--) {
        if(i%2===0) {
    console.log( i+ "is even" ) }
    else 
    console.log (i+ "is odd") } }



function iterateAndLogWithWhile (x) {
    var i=x 
        while(i>=0 ) {
        if(i%2===0) {
    console.log( i+ "is even" ) }
    else 
    console.log (i+ "is odd")
        i--}
}

function iterateAndLogWithRecursion (x) {
    if (x===0){
      return x+" "+"is even"
    }
    
    if(x%2===0) {
        console.log( x+" "+ "is even" ) 
    }
        else {
        console.log (x+" "+ "is odd")
        }

        return iterateAndLogWithRecursion(x-1)

}

//3 ------

function weirdDivisionWithFor (n) {
    for ( var i=1 ; i<=n ; i++ ) {
        
     if ( n%3===0 && n%5===0 ) {
            return "juliajames" }
     else if (n%3===0){
            return "julia"}
     else if (n%5===0){
            return "james"}
         
        else return n }
}

function weirdDivisionWithFor (n) {
    var i=1 
    while ( i<=n ) {
        
     if ( n%3===0 && n%5===0 ) {
            return "juliajames" }
     else if (n%3===0){
            return "julia"}
     else if (n%5===0){
            return "james"}
         
        else {
            return n }

            i++ 
        }

}

function weirdDivisionWithRecursion (n) {
    if(n===1){
        return n
    }
   
        
     if ( n%3===0 && n%5===0 ) {
            return "juliajames" }
     else if (n%3===0){
            return "julia"}
     else if (n%5===0){
            return "james"}
         
        else return n 

      return weirdDivisionWithRecursion (n-1)

        }
        
    // 4-----

    function laughWithWhile (n) {
        var res="ha"
        var i=1
        while ( i<n ) {
            res+="ha"
            i++
        }
        return res
    }


    function laughtWithRecursion (n) {
    
        if(n===0){
            return ""
        }
        return "ha"+lau(n-1)
    }


    function laughWithFor (n) {
        var res="ha"
        for (var i=1 ; i<n ; i++) {
            res+="ha"
        }
        return res
    }
    
    //4------

    function sumWithFor (n) {
        var sum=0
        for (var i=n ; i>=0 ; i--) {
            sum+=i

        }
        return (sum)
    }

    function sumWithFWhile (n) {
        var sum=0
        var i=n
        while (  i>=0  ) {
            sum+=i

            i--  
        }
        return sum
    }



    function sum (n) {
        if(n===0) {
            return 0
        }
        return n+sum(n-1)
    }

    // 5-----

    function factoriel (n) {
        if (n===1){
            return 1
        }
        return n*factoriel(n-1)
    }

    //6----

    function rangeFor (min , max) {
        var arr=[]
        for (var i=min ; i<max ; i++){
            arr.push(i)
        }
        return arr
    }

    function rangeWhile (min , max) {
        var arr=[]
        var i=min 
        while ( i<max ){
            arr.push(i)
            i++
        }
        return arr
    }

    //7------

    function reverseWithFor(str) {
        var res=""
        for (var i=str.length-1 ; i>=0 ; i-- ){
            res+=str[i]
        }
        return res
    }

    function reverseWithWhile(str) {
        var res=""
        var i=str.length-1
        while ( i>=0   ){
            res+=str[i]

            i--
        }
        return res
    }

    function reverseStr (str) {
        if (str.length===0){
            return ""
        }
        var first = str[0]
        return reverseStr(str.slice(1))+first
    }


//8 -------

function addDigitsFor(num) {
    var add=0
    var str=num.toString()

    for(var i=0 ; i<str.length ; i++) {
        add+=parseInt(str[i])
    }
    return add
}


function addDigitsWhile(num) {
    var add=0
    var str=num.toString()
    var i=0
    while(  i<str.length ) {
        add+=parseInt(str[i])
        i++
    }
    return add
}

//9 -------------

function fibRecursive(number) {
    if (number===0){
        return 1  
    }
    if(number===1){
        return 1
    }
    return fibRecursive(number-1)+fibRecursive(number-2)
    
}

//10 -----------

function firstDigit(str) {
    for (var i=0 ; i<str.length ; i++){
        if (str[i]>=0 && str[i]<=9){
            return str[i]
        }
    } 
}

function firstDigitWithWhile(str) {
    var i=0
    while ( i<str.length ){
        if (str[i]>=0 && str[i]<=9){
            return str[i]
        }
         i++
    } 
}

// 11 ------

function remove(arr, el) {
    var res= []
 
     for (var i=0 ; i<arr.length ; i++){
         if(arr[i] !== el){
            res.push(arr[i]) 
         }
     }
     return res
 }

 // or

 function remove(arr, el) {

    for (var i=0 ; i<arr.length ; i++){
        if(arr[i] === el){
           arr.splice(i,1) 
        }
    }
    return arr
}

 //12 -------

 function averageWithFor (arr) {
    var ave = 0 
    for (var i=0 ; i<arr.length ; i++){
        ave+= arr[i]/arr.length
    }
    return ave
}

//with recursion

function ave (arr) {
    if (arr.length===0){
        return 0    
    }
    if(arr.length===1){
        return arr[0]
    }
    
    return (arr[0]+ave(arr.slice(1)) ) / arr.length
}
// 13 --------

function findMax(str) {
    var max=str[0]
    for (var i=1 ; i<str.length ; i++){
        if(str[i]>max){
            max=str[i]
        }
    }
    return max
}

function findMax(str) {
    var max=str[0]
    var i=1
    while ( i<str.length  ){
        if(str[i]>max){
            max=str[i]
        }
        i++
    }
    return max
}



// 14 ----------

function evenDigits(str) {
    for (var i = 0; i < str.length; i++) {
        if (parseInt(str[i]) % 2 !== 0) {
            return false;
        }
    }
    return true;
}

// with recursion

function even (str){
    if (str.length===0) {
        return true
    }

    if(parseInt(str[0]) %2 !== 0 ){
        return false
    }
    return even (str.slice(1))
}

//15 -----------

function palindrom(str) {
    var reversed=""

    for (var i=str.length-1 ; i>=0 ; i--){
         reversed+=str[i]
    }
    if (str===reversed) {
       return true 
    }
    return false 
}

//16 -------

function firstDuplicate(array){

    for(var i=0 ; i<array.length ; i++){
        for (var j=i+1 ; j<array.length ; j++){
            if (array[i] === array[j]) {
                return array[i]
            }
        }
    }
     return "No Duplicates"
    
}

//17 --------

function rowandseat (rows,seat){
    
    for(var i=0 ; i<rows ; i++){
        for (var j=0 ; j<seat ; j++){
            console.log("row"+ i + "-seat" + j)
        }
    }
}


