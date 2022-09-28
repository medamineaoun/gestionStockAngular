import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOtComponent } from './ajout-ot.component';

describe('AjoutOtComponent', () => {
  let component: AjoutOtComponent;
  let fixture: ComponentFixture<AjoutOtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutOtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
