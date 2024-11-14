class Solution{
      printTillN(n) {
       let list = [1]
       
       if(list.length >= n) {
          return console.log(list.join())
       }
       
       list.push(list[list.length -1] + 1)
       console.log(list)
       return this.printTillN(n)
     }
}

const solution = new Solution;
solution.printTillN(10)
