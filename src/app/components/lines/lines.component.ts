import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { SalesDataService } from 'src/app/services/sales-data.service';

@Component({
	selector: 'app-lines',
	templateUrl: './lines.component.html',
	styles: [
	]
})
export class LinesComponent implements OnInit {

	public _chartLines!: Chart;

	constructor(public _salesData: SalesDataService) { }

	ngOnInit(): void {

		this.createChart();
	}

	createChart(): void {

		this._chartLines = new Chart("_canvasLines", {
			type: 'line',
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

		this._chartLines.update();
	}
}
