import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-license-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './licenseform.component.html',
  styleUrls: ['./licenseform.component.css'],
  providers: [DatePipe]
})
export class LicenseFormComponent implements OnInit {

  licenseForm : FormGroup;

  constructor(private datePipe : DatePipe) {
    this.licenseForm = new FormGroup({
      product: new FormControl('', Validators.required), 
      period: new FormControl('', Validators.required), 
      count: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)])
    })
  }

  products : string[] = ['product1', 'product2', 'product3'];
  periods : Record<string, string[]> = {
    product1 : ['daily', 'monthly'],
    product2 : ['monthly', 'annually'],
    product3 : ['daily', 'monthly', 'annually'],
  };
  availablePeriods: string[] = [];
  date = new Date();


  ngOnInit(): void {
    this.updateDurationOptions();
  }

  updateDurationOptions() {
    this.availablePeriods = this.periods[this.licenseForm.get('product')?.value];
  }

  onSubmit(){
    let data = this.licenseForm.get('product')?.value + ' ' + this.licenseForm.get('period')?.value + ' ' + this.licenseForm.get('count')?.value + ' ' + this.datePipe.transform(this.date, 'dd.MM.yyyy');
    
    const blob = new Blob([data], {type: 'text/plain'});
    
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'licenses.txt';  
    a.click(); 
    
    URL.revokeObjectURL(url);
  }
}