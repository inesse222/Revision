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



