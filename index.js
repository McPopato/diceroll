// when a chat event is received
var result;
var dice;
var sides;
var i;
var total;
var content;
var numbers;
var roll;
var sender;
global.Brikkit.on('chat', evt => {
		content = evt.getContent();
		sender = evt.getSender().getUsername();
		if(content.includes('!diceroll')) {
			numbers = content.match(/\d+/g).map(Number);
			result = 0;
			dice = numbers[0];
			sides = numbers[1];
			for (i = 0; i < dice;i++) {
				roll = Math.floor(Math.random() * sides) + 1;
				if(roll > sides) {
					roll = sides
				}
				result += roll;
			}
			global.Brikkit.say(sender+' rolled '+dice+' d '+sides+' to get '+result);
	}	
	
});