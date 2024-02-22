class Price {
	constructor(pack, cost, still, portrait, blur) {
		this.pack = pack;
		this.cost = cost;
		this.still = still;
		this.portrait = portrait;
		this.blur = blur;
	}
}

// Created an empty array to store all the rows of the table one by one
let prices = [];

document.querySelectorAll('.update').forEach((button) =>
	button.addEventListener('click', () => {
		const row = button.parentElement.parentElement;
		const pack = row.children[0].textContent;
		const cost = row.children[1].textContent;
		const stillPictures = row.children[2].firstElementChild.value;
		const portraitPictures = row.children[3].firstElementChild.value;
		const blurPictures = row.children[4].firstElementChild.value;
		console.log(row);

		if (parseFloat(stillPictures) >= 0 && parseFloat(portraitPictures) >= 0 && parseFloat(blurPictures) >= 0) {
			let flag = false;
			let index = -1;

			//Will work only when the update is required next
			for (let i = 0; i < prices.length; i++) {
				if (prices[i].cost == cost) {
					flag = true;
					index = i;
					console.log(prices[i].pack);
				}
			}

			//Updating the values next
			if (flag) {
				prices[index].still = stillPictures;
				prices[index].portrait = portraitPictures;
				prices[index].blur = blurPictures;
				
			} else {
				const price = new Price(pack, cost, stillPictures, portraitPictures, blurPictures);
				prices.push(price);
				console.log(prices);
			}
		} else {
			alert('Negative values are not allowed');
		}
	})
);

document.querySelector('.display').addEventListener('click', () => {
	const table = document.createElement('table');
	let j = 0;

	const r = table.insertRow(0);
	(r.insertCell(j++).innerHTML = 'Package Name');
	(r.insertCell(j++).innerHTML = 'Price per Picture($)');
	r.insertCell(j++).innerHTML = 'Still Shots';
	r.insertCell(j++).innerHTML = 'Portrait Shots';
	r.insertCell(j++).innerHTML = 'Blur Shots';
	r.insertCell(j++).innerHTML = 'Total Price';

	for (let i = 0; i < prices.length; i++) {
		const row = table.insertRow(table.rows.length);
		let j = 0;
		console.log(prices[i].pack)
		row.insertCell(j++).innerHTML = prices[i].pack; 
		row.insertCell(j++).innerHTML = prices[i].cost;
		row.insertCell(j++).innerHTML = prices[i].still;
		row.insertCell(j++).innerHTML = prices[i].portrait;
		row.insertCell(j++).innerHTML = prices[i].blur;
		row.insertCell(j++).innerHTML = ((prices[i].cost)*(prices[i].still))+((prices[i].cost)*(prices[i].portrait))+((prices[i].cost)*(prices[i].blur));
	}
	document.querySelector('.output').innerHTML = '';
	document.querySelector('.output').appendChild(table);
});
