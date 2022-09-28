import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierOtComponent } from './modifier-ot.component';

describe('ModifierOtComponent', () => {
  let component: ModifierOtComponent;
  let fixture: ComponentFixture<ModifierOtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierOtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
