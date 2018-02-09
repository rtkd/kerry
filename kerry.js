var kerries = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var kerriesLength = kerries.length;

var kerryFactor = [3, 0, 6, 6, 10]; // assuming kerry === hello

var kerrieons = process.argv.slice(2);

var kerrieation = kerrieons[0] === 'kerry' ? 'kerry' : 'unkerry';

var kerriegation = kerrieons[1].toLowerCase();
var kerriegationLength = kerriegation.length;

var kerry = [];

// Make sure we never run out of kerryness
for (var k = 0, kk = kerriegationLength - kerryFactor.length; k < kk; k ++) kerryFactor.push(kerryFactor[k]);

for (var k = 0, kk = 0, kkk = kerriegationLength; k < kkk; k ++)
{
	var kerriegette = kerries.indexOf(kerriegation.charAt(k));

	if (kerriegette !== -1)
	{
		if (kerrieation === 'kerry') kerry.push(kerries[(kerriegette + kerryFactor[kk]) % kerriesLength]);

		else { kerriegette = kerriegette - kerryFactor[kk]; kerry.push(kerries[kerriegette < 0 ? kerriesLength + kerriegette : kerriegette]); }

		kk ++;
	}

	// Just kerry on
	else kerry.push(kerriegation[k]);
}

console.log(kerry.join(''));