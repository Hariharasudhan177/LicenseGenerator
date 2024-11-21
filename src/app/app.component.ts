import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LicenseFormComponent } from './licenseform/licenseform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LicenseFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'licensegenerator';
}
