function compareObjects (obj1, obj2, propName) {
//	One string function will work with correct arguments.
//	console.log ( obj1[propName] > obj2[propName] ? obj1['name'] : obj2['name'] )
	if ( obj1.hasOwnProperty (propName) && obj2.hasOwnProperty (propName) ) {
		if ( isNaN(obj1[propName]) || isNaN(obj2[propName]) )
			console.log( 'Incorrect value(s) of argument(s)!' );
		else if ( obj1[propName] > obj2[propName] )
			console.log( obj1['name'] );
		else if ( obj1[propName] < obj2[propName] )
			console.log( obj2['name'] );
		else if ( obj1[propName] == obj2[propName] )
			console.log( obj1['name'] + ' equal ' + obj2['name'] ) 
		else
			console.log( 'Unexpected comparation case.' );
 	}
	else {
		console.log ('Incorrect property name. Check objects.');
	}
}

var vehicle1 = {name:'ZAZ-965A', wheels: 4, wings: 0, serviceCeiling: 0.15};

function VehicleCreator (name, wheels, wnigs, serviceCeiling) {
	this.name 		= name;
	this.wheels 	= wheels;
	this.wings 		= wnigs;
	this.serviceCeiling = serviceCeiling;
};

var vehicle2 = new VehicleCreator ("AN-178", 6, 2, 13000);
var vehicle3 = new VehicleCreator ("Bicycle Gnome", 3, 0.5, 0.2);

compareObjects ( vehicle1, vehicle2, 'wheels' );
compareObjects ( vehicle2, vehicle3, 'wheels' );
compareObjects ( vehicle1, vehicle3, 'wings' );
compareObjects ( vehicle1, vehicle3, 'serviceCeiling' );

