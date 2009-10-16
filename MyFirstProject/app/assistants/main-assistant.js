function MainAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

MainAssistant.prototype.setup = function() {
	
	
	 this.name =
	   {
	     value : ""
	   };
	 this.controller.setupWidget("name", {} ,this.name);
	
	
	this.controller.setupWidget("myButton",
		{
		label : "Say Hello"
		});
	this.sayHelloHandler = this.sayHello.bindAsEventListener(this);
	this.controller.listen('myButton', Mojo.Event.tap, this.sayHelloHandler);
	
}

MainAssistant.prototype.sayHello = function(event) {
	this.controller.get("announcement").innerHTML = "Hello!" + this.name.value;
	
	this.controller.stageController.pushScene('second', this.name.value);
}


MainAssistant.prototype.activate = function(event) {
	if (event != undefined) {
		this.controller.get('announcement').update("Pop!" + event);
	}	 
}


MainAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
}

MainAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
}
