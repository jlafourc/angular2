import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuDetailComponent } from './individu-detail.component';

describe('IndividuDetailComponent', () => {
  let component: IndividuDetailComponent;
  let fixture: ComponentFixture<IndividuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividuDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
