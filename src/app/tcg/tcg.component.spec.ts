import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcgComponent } from './tcg.component';

describe('TcgComponent', () => {
  let component: TcgComponent;
  let fixture: ComponentFixture<TcgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
