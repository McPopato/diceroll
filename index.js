global.Brikkit.on('chat', evt => {
    var roll;
    var content = evt.getContent();
    var sender = evt.getSender().getUsername();

    if(content.includes('!diceroll') & /\d/.test(content) == true) {
        var numbers = content.match(/\d+/g).map(Number);
        var result = 0;
        var dice = numbers[0];
        var sides = numbers[1];

        if(dice >= 100) {
            dice = 100;
		} else if(dice == 0) {
            dice = 1;
		}
		
		if(sides > 1000) {
            sides = 1000;
        } else if(isNaN(sides) == true) {
            sides = 6;
        }

        for (var i = 0; i < dice;i++) {
            roll = Math.floor(Math.random() * sides) + 1;
            if(roll > sides) {
                roll = sides;
            }

            result += roll;
        }

        global.Brikkit.say(sender+' rolled '+dice+' d '+sides+' to get '+result);
	}
});
