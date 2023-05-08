import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisInfosComponent } from './mais-infos.component';

describe('MaisInfosComponent', () => {
  let component: MaisInfosComponent;
  let fixture: ComponentFixture<MaisInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
