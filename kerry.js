var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersLength = letters.length;

var rot = [3, 0, 6, 6, 10];

var cmd = process.argv.slice(2);

var direction = cmd[0] === 'unkerry' ? 'unkerry' : 'kerry';

var string = cmd[1];
var stringLength = string.length;

var kerry = [];

for (var i = 0, ii = stringLength - rot.length; i < ii; i ++) rot.push(rot[i]);

for (var i = 0, ii = 0, iii = stringLength; i < iii; i ++)
{
	var offset = letters.indexOf(string.charAt(i));

	if (offset !== -1)
	{
		if (direction === 'kerry') kerry.push(letters[(offset + rot[ii]) % lettersLength]);

		else if (direction === 'unkerry')
		{
			offset = offset - rot[ii];

			kerry.push(letters[offset < 0 ? lettersLength - offset : offset]);
		}

		ii ++;
	}

	else kerry.push(string[i]);
}

console.log(kerry.join(''));