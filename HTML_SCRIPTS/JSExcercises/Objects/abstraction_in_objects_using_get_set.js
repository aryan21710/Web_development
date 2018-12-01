function con(name) {
	this.name=name
	let age=30;

	Object.defineProperty(this, 'age', {
		get : function() {
			return age;
		},
		set : function(value) {
			age=value;
		}
	})
}

const obj=new con('ary');
