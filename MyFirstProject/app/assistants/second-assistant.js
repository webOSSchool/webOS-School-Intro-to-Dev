function SecondAssistant(argFromPusher) {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
	this.textValue = argFromPusher;
}

SecondAssistant.prototype.setup = function() {
	 
	 // update the text-from-main-scene with value passed to the scene 
	 this.controller.get('text-from-main-scene').update(this.textValue);

	 // set up text field
	 this.secondSceneTextField =
	   {
	     value : ""
	   };
	 this.controller.setupWidget("secondSceneTextField", {} ,this.secondSceneTextField);

	// set up the button
	this.controller.setupWidget("pop_button",
		{
		label : "Pop to main scene"
		});
	this.popButtonHandler = this.handlePop.bindAsEventListener(this);
	this.controller.listen('pop_button', Mojo.Event.tap, this.popButtonHandler);
}

SecondAssistant.prototype.handlePop = function(){
	
	this.textValue = this.secondSceneTextField.value;
	
	//pop the current scene off the scene stack
     this.controller.stageController.popScene(this.secondSceneTextField.value);
}

SecondAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
}


SecondAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
}

SecondAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
}
