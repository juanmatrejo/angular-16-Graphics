import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SalesDataService {

	data = {
		labels: ['January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'],
		datasets: [{
			label: 'Number of Orders',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			backgroundColor: 'rgb(255, 192, 203, 0.4)',
			borderColor: 'maroon',
			borderWidth: 5,
			fill: true,
			tension: 0.1
		},
		{
			label: 'Number of Purchases',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			backgroundColor: 'rgb(144, 238, 144, 0.4)',
			borderColor: 'green',
			borderWidth: 5,
			fill: true,
			tension: 0.1
		},
		{
			label: 'Number of Payments',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			backgroundColor: 'rgb(0, 255, 255, 0.4)',
			borderColor: 'blue',
			borderWidth: 5,
			fill: true,
			tension: 0.1
		}]
	}

	doughnut = {
		labels: this.data.labels,
		datasets: [{
			label: this.data.datasets[0].label,
			data: this.data.datasets[0].data,
			backgroundColor: [
				'maroon',
				'green',
				'blue',
				'yellow',
				'silver',
				'purple',
				'cyan',
				'lightgreen',
				'pink',
				'red',
				'lightsteelblue',
				'aquamarine'
			]
		}]
	}

	constructor() {

		this.setValues();
	}

	setValues() {

		for (let idx = 0; idx < this.data.datasets.length; idx++) {

			for (let month = 0; month < 12; month++) {

				const value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
				this.data.datasets[idx].data[month] = value;
			}
		}
	}
}
