import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDonneeComponent } from './modifier-donnee.component';

describe('ModifierDonneeComponent', () => {
  let component: ModifierDonneeComponent;
  let fixture: ComponentFixture<ModifierDonneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierDonneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
