/*

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

function divisorTest( d, label ) {
    return ( number ) => {
        if ( number % d == 0 ) {
            return label;
        }
        return number;
    }
}

function assignLabel( listOfTests ) {
    return ( number ) => {
        for ( const test of listOfTests ) {
            const result = test( number );
            if ( result != number ) {
                return result;
            }
        }
        return number;
    }
}

function fizzbuzz( n )
{
  //
    const range = ( min, max ) => [... Array( max - min + 1 ). keys()]. map( i => i + min );       
    
    const numbers = range (1, n );


    const divide15 = divisorTest( 15, 'FizzBuzz' );
    const divide5 = divisorTest( 5, 'Buzz' );
    const divide3 = divisorTest( 3, 'Fizz' );

    const tests = [ divide15, divide5, divide3 ];

    const assignLabelFunction = assignLabel( tests );
    const result = numbers.map( number => assignLabelFunction( number ));
    return result;
}

