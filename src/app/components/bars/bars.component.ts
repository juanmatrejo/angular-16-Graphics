import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { SalesDataService } from 'src/app/services/sales-data.service';

@Component({
	selector: 'app-bars',
	templateUrl: './bars.component.html',
	styles: [
	]
})
export class BarsComponent {

	public _chartBars!: Chart;

	constructor(public _salesData: SalesDataService) { }

	ngOnInit(): void {

		this.createChart();
	}

	createChart(): void {

		this._chartBars = new Chart("_canvasBars", {
			type: 'bar',
			data: this._salesData.data,
			options: {
				animation: {
					duration: 3500,
					easing: 'easeInOutBounce',
					delay: 10,
					loop: false
				},
				responsive: true,
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	}

	showValues() {

		this._chartBars.update();
	}
}
