function ClassRoom(name, furniture, people, supplies) {
	this._name = name;
	// this._classroom = classroom;
	this._windows = windows;
	this._supplies = supplies;
	this._apples = apples;
};

ClassRoom.prototype.name = function() {
	return this._name;
};


function TreeHouse () {
	ClassRoom.apply(this, arguments);
	this._funGames = true;
	this._nerfGuns = true;
}

TreeHouse.prototype = Object.create(ClassRoom.prototype); //this shows us that treehouse inherits from classroom.
TreeHouse.prototype.constructor = TreeHouse;


//create some classrooms. This will have whatever a regular classroom has. If I need stuff from treehouse, I can take it

TreeHouse.prototype.letsHangOut = function () {
	prepareToHangOut = true;
	return prepareToHangOut;
		console.log('Were gonna hang out and get rowdy');
};


var classroom1 = new ClassRoom('Main PCS classroom'/*, more arguments */);


var classroom2 = new ClassRoom('Back PCS classroom'/*, more arguments */);


var classroom3 = new ClassRoom('Steve\'s first grade classroom'/*, more arguments */);


var classroom4 = new TreeHouse('JSI classroom'/*, more arguments */);


var classrooms = [classroom1, classroom2, classroom3, classroom4];
classrooms.forEach(function(classroom) {
	console.log(classroom.name());
});