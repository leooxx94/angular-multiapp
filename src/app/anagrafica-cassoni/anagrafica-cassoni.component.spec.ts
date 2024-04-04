import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaCassoniComponent } from './anagrafica-cassoni.component';

describe('AnagraficaCassoniComponent', () => {
  let component: AnagraficaCassoniComponent;
  let fixture: ComponentFixture<AnagraficaCassoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagraficaCassoniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnagraficaCassoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
