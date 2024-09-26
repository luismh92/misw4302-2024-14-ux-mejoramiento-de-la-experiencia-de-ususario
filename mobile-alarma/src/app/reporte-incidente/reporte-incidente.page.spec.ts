import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteIncidentePage } from './reporte-incidente.page';

describe('ReporteIncidentePage', () => {
  let component: ReporteIncidentePage;
  let fixture: ComponentFixture<ReporteIncidentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteIncidentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
