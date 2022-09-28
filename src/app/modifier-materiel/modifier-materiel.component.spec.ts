import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMaterielComponent } from './modifier-materiel.component';

describe('ModifierMaterielComponent', () => {
  let component: ModifierMaterielComponent;
  let fixture: ComponentFixture<ModifierMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
