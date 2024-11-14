let seq = [0, 1]

function fibogen(fn1, fn2, n) {

	if(seq.length < n) {
	  seq.push(fn1 + fn2)
	  return fibogen(seq[seq.length - 2], fn1 + fn2, n)
	} else {
	  console.log(seq)
	  console.log(`next number would be: ${fn1 + fn2}`)
    }
}	

// generate the first N numbers of fibonacci sequence
function fibonacci(n) {
	fibogen(0, 1, n)
}

fibonacci(100);
