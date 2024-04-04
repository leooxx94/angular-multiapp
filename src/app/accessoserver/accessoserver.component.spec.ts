import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoserverComponent } from './accessoserver.component';

describe('AccessoserverComponent', () => {
  let component: AccessoserverComponent;
  let fixture: ComponentFixture<AccessoserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
