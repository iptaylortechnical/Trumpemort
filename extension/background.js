let func = () => {
	let src = $('body').html();

	let donString = 'Voldemort';
	let donStringsb = ' Voldemort';
	let donStringsa = 'Voldemort ';
	let hilString = 'Pretty Pretty Queen of the Unicorns';
	let hilStringsb = ' Pretty Pretty Queen of the Unicorns';
	let hilStringsa = 'Pretty Pretty Queen of the Unicorns ';

	let donaldRegsb = /((?!(Donald Trump)) Donald)/gi;
	let trumpRegsb = /((?!(Donald Trump)) Trump)/gi;
	let hillaryRegsb = /((?!(Hillary Clinton)) hillary)/gi;
	let clintonRegsb = /((?!(Hillary Clinton)) clinton)/gi;
	let donaldRegsa = /((?!(Donald Trump))Donald )/gi;
	let trumpRegsa = /((?!(Donald Trump))Trump )/gi;
	let hillaryRegsa = /((?!(Hillary Clinton))hillary )/gi;
	let clintonRegsa = /((?!(Hillary Clinton))clinton )/gi;
	let donaldTrumpReg = /donald trump/gi;
	let hillaryClintonReg = /hillary clinton/gi;

	src = src.replace(donaldTrumpReg, donString);
	src = src.replace(hillaryClintonReg, hilString);
	src = src.replace(donaldRegsb, donStringsb)
	src = src.replace(trumpRegsb, donStringsb);
	src = src.replace(hillaryRegsb, hilStringsb);
	src = src.replace(clintonRegsb, hilStringsb);
	src = src.replace(donaldRegsa, donStringsa)
	src = src.replace(trumpRegsa, donStringsa);
	src = src.replace(hillaryRegsa, hilStringsa);
	src = src.replace(clintonRegsa, hilStringsa);


	$('body').html(src);
}

setTimeout(1000, func);

setInterval(func, 10000);
