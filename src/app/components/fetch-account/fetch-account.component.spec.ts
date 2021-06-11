import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAccountComponent } from './fetch-account.component';

describe('FetchAccountComponent', () => {
  let component: FetchAccountComponent;
  let fixture: ComponentFixture<FetchAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
