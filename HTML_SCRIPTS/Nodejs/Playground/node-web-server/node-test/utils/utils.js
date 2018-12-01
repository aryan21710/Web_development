// #KEYWORDS:- {Object.prototype.toString, Object toString method modified, object destructuring}

module.exports.add=(a,b)=> {
	if (typeof(a)=='number' && typeof(b)=='number') return a+b;
	return 0;
}

module.exports.setName=(user,fullName)=>{

	const index=fullName.indexOf(' ');
	user.firstName=fullName.slice(0,fullName.indexOf(' '));
	user.lastName=fullName.slice(fullName.indexOf(' '),);
	// THIS WILL PRINT THE OBJECT USER AND ITS CONTENTS INSTEAD OF PRINTING
	// object OBJECT.
	Object.prototype.toString=function(){
		return this.firstName + this.lastName;

	}

	console.log(user);
	const {firstName: f, lastName: l}=user;
	console.log(`firstName is:- "${f}" LastName is "${l}"`);
	return user;
	
}