/*var o2 = {};
function flatCopy (obj1, obj2) { 
	"use strict"; 
	for (var key in obj1){ 
		obj2[key] = obj1[key].valueOf(); 
	}
}*/

var o1 = {1:{'a':'aa',
			 'b':'bb',
			 fun: { 1:function(){return 1;}, 2:function(a){alert(a);} }, 
			 c:'cc'},
          2:'qwe', 
          3:['all', 'is', 'fine', {1:'aa', 2:'bb'}]};
var o2 = {};

function deepCopy (obj1, obj2) { 
	for ( var key in obj1 ) { 
		switch( typeof obj1[key] ) {
			case 'boolean':
			case 'number':
			case 'string':
			case 'function': 
			case 'undefined': 
				obj2[key] = obj1[key];
				break; 
			case 'object': 
				if ( obj1[key] === null ) 
					obj2[key] = obj1[key]; 
				else if ( obj1[key].constructor.name === "Array" ) { 
					obj2[key] = [];
					for ( var i=0, len=obj1[key].length; i < len; i++ ) { 
						if ( typeof obj1[key][i] === 'object') { 
							obj2[key][i] = {};
							deepCopy( obj1[key][i], obj2[key][i] ); 
						}
						else {
							obj2[key][i] = obj1[key][i];
						}
					} 
				} 
				else {
					obj2[key] = {};
					deepCopy( obj1[key], obj2[key] ); 
				}
				break;
		}
	}
}
deepCopy (o1, o2);
