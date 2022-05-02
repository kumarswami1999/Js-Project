

// Javascript implementation of the approach

// Function to return the count
// of N-digit palindrome numbers
function nDigitPalindromes(n)
{
	return (9 * Math.pow(10, parseInt((n - 1) / 2)));
}

// Driver code
var n = 2;
document.write(nDigitPalindromes(n));
