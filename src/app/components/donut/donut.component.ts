import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, ChartTypeRegistry } from 'chart.js/auto';
import { SalesDataService } from 'src/app/services/sales-data.service';

@Component({
	selector: 'app-donut',
	templateUrl: './donut.component.html',
	styles: [
	]
})
export class DonutComponent {

	public _chartDoughnut!: Chart;
	public _chartPie!: Chart;

	constructor(public _salesData: SalesDataService) { }

	ngOnInit(): void {

		this.createChart();
	}

	createChart(): void {

		const graphTypeDoughnut: ChartType = 'doughnut';
		const graphTypePie: ChartType = 'pie';

		const configDoughnut: ChartConfiguration<keyof ChartTypeRegistry, number[], string> = {
			type: graphTypeDoughnut,
			data: this._salesData.doughnut,
			options: {
				animation: {
					duration: 3500,
					easing: 'easeInOutBounce',
					delay: 10,
					loop: false
				},
				responsive: true
			}
		};

		const configPie: ChartConfiguration<keyof ChartTypeRegistry, number[], string> = {
			type: graphTypePie,
			data: this._salesData.doughnut,
			options: {
				animation: {
					duration: 3500,
					easing: 'easeInOutBounce',
					delay: 10,
					loop: false
				},
				responsive: true
			}
		};

		this._chartDoughnut = new Chart("_canvasDoughnut", configDoughnut);
		this._chartPie = new Chart("_canvasPie", configPie);
	}

	showValues() {

		this._chartDoughnut.update();
		this._chartPie.update();
	}
}
