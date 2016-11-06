class Calculator {
	constructor () {
		this.curSum   = 0;
		this.operands = [];
	}

	add ( num ) {
		this.operands.push (num);
		this.curSum += num;
	}

	getCurrentSum ( index ) {
		if ( index === undefined ) 
			return this.curSum;
		else if ( index >= 0 && index <= this.operands.length ) {
			for (var sum = 0; index > 0; index--) {
				sum += this.operands[ index-1 ];
			}
			return sum;
		}
		else // Incorrect input parameter
			return null;
	}
}

var calc1 = new Calculator();
var calc2 = new Calculator();

calc1.add ( 3 );
calc1.add ( 8 );
calc1.add ( 11 );

calc2.add ( 5 );
calc2.add ( 12 );
calc2.add ( 17 );

calc1.getCurrentSum() + calc2.getCurrentSum(); //56
calc1.getCurrentSum(2) + calc2.getCurrentSum(2); //28
calc1.getCurrentSum(3) == calc1.getCurrentSum();	// true
calc2.getCurrentSum(3) == calc2.getCurrentSum();	// true
