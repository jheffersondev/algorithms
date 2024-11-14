class Solution {
    // Function to return list containing first n fibonacci numbers.
    printFibb(N, list = [0, 1]) {
        if(list.includes(N)) {
            return [N]
        }
        
        if(N > list.length -1) {
            return console.log(list)
        }
        
        // Fn = fn-1 + fn-2
        let len = list.length
        console.log(len)
        list.push(list[len-1] + list[len-2])
        return this.printFibb(N, list)
    }
}

const solution = new Solution;
solution.printFibb(3)
