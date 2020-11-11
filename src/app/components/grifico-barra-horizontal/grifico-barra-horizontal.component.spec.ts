import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrificoBarraHorizontalComponent } from './grifico-barra-horizontal.component';

describe('GrificoBarraHorizontalComponent', () => {
  let component: GrificoBarraHorizontalComponent;
  let fixture: ComponentFixture<GrificoBarraHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrificoBarraHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrificoBarraHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
