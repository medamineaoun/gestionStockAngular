import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOtComponent } from './liste-ot.component';

describe('ListeOtComponent', () => {
  let component: ListeOtComponent;
  let fixture: ComponentFixture<ListeOtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
