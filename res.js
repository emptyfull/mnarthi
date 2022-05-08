
	
window.addEventListener('load',() => {

	const params=(new URL(document.location)).searchParams;
	const name=params.get('bname');
	const author=params.get('aname');
	const lang=params.get('lname');
	const amount=params.get('amount');

	document.getElementById('res').innerHTML=name;
	document.getElementById('res1').innerHTML=author;
	document.getElementById('res2').innerHTML=lang;
	document.getElementById('res3').innerHTML=amount;
})