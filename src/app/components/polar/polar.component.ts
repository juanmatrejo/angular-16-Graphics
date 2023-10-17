import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, ChartTypeRegistry } from 'chart.js/auto';
import { SalesDataService } from 'src/app/services/sales-data.service';

@Component({
	selector: 'app-polar',
	templateUrl: './polar.component.html',
	styles: [
	]
})
export class PolarComponent {

	public _chartPolar!: Chart;

	constructor(public _salesData: SalesDataService) { }

	ngOnInit(): void {

		this.createChart();
	}

	createChart(): void {

		const graphType: ChartType = 'polarArea';

		const configDoughnut: ChartConfiguration<keyof ChartTypeRegistry, number[], string> = {
			type: graphType,
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
			type: graphType,
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

		this._chartPolar = new Chart("_canvasPolar", configPie);
	}

	showValues() {

		this._chartPolar.update();
	}
}
