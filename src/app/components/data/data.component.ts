import { Component } from '@angular/core';
import { SalesDataService } from 'src/app/services/sales-data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [
  ]
})
export class DataComponent {

  constructor(public _salesData: SalesDataService) { }

	setValues() {

		this._salesData.setValues();
	}
}
