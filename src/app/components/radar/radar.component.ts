import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { SalesDataService } from 'src/app/services/sales-data.service';

@Component({
	selector: 'app-radar',
	templateUrl: './radar.component.html',
	styles: [
	]
})
export class RadarComponent {

	public _chartRadar!: Chart;

	constructor(public _salesData: SalesDataService) { }

	ngOnInit(): void {

		this.createChart();
	}

	createChart(): void {

		this._chartRadar = new Chart("_canvasRadar", {
			type: 'radar',
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

		this._chartRadar.update();
	}
}
