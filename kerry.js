var kerries = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var kerriesLength = kerries.length;

var kerryFactor = [3, 0, 6, 6, 10]; // assuming kerry === hello

var kerryations = process.argv.slice(2);

var kerryness = kerryations[0] === 'kerry' ? 'kerry' : 'unkerry';

var kerrygation = kerryations[1].toLowerCase();
var kerrygationLength = kerrygation.length;

var kerry = [];

for (var i = 0, ii = kerrygationLength - kerryFactor.length; i < ii; i ++) kerryFactor.push(kerryFactor[i]);

for (var i = 0, ii = 0, iii = kerrygationLength; i < iii; i ++)
{
	var offset = kerries.indexOf(kerrygation.charAt(i));

	if (offset !== -1)
	{
		if (kerryness === 'kerry') kerry.push(kerries[(offset + kerryFactor[ii]) % kerriesLength]);

		else { offset = offset - kerryFactor[ii]; kerry.push(kerries[offset < 0 ? kerriesLength + offset : offset]); }

		ii ++;
	}

	else kerry.push(kerrygation[i]);
}

console.log(kerry.join(''));