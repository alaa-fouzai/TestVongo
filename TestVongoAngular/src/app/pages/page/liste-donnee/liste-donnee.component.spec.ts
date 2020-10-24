import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDonneeComponent } from './liste-donnee.component';

describe('ListeDonneeComponent', () => {
  let component: ListeDonneeComponent;
  let fixture: ComponentFixture<ListeDonneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDonneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
