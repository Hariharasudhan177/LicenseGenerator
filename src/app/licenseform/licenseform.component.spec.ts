import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseFormComponent } from './licenseform.component';

describe('LicenseformComponent', () => {
  let component: LicenseFormComponent;
  let fixture: ComponentFixture<LicenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
