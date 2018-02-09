var kerries = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var kerriesLength = kerries.length;

var kerryFactor = [3, 0, 6, 6, 10]; // assuming kerry === hello

var kerryations = process.argv.slice(2);

var kerryness = kerryations[0] === 'kerry' ? 'kerry' : 'unkerry';

var kerrygation = kerryations[1].toLowerCase();
var kerrygationLength = kerrygation.length;

var kerry = [];

for (var k = 0, kk = kerrygationLength - kerryFactor.length; k < kk; k ++) kerryFactor.push(kerryFactor[k]);

for (var k = 0, kk = 0, kkk = kerrygationLength; k < kkk; k ++)
{
	var kerriegette = kerries.indexOf(kerrygation.charAt(k));

	if (kerriegette !== -1)
	{
		if (kerryness === 'kerry') kerry.push(kerries[(kerriegette + kerryFactor[kk]) % kerriesLength]);

		else { kerriegette = kerriegette - kerryFactor[kk]; kerry.push(kerries[kerriegette < 0 ? kerriesLength + kerriegette : kerriegette]); }

		kk ++;
	}

	else kerry.push(kerrygation[k]);
}

console.log(kerry.join(''));