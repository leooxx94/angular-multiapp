import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartecopieComponent } from './quartecopie.component';

describe('QuartecopieComponent', () => {
  let component: QuartecopieComponent;
  let fixture: ComponentFixture<QuartecopieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartecopieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartecopieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
