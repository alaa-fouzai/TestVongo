import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDonneeComponent } from './ajouter-donnee.component';

describe('AjouterDonneeComponent', () => {
  let component: AjouterDonneeComponent;
  let fixture: ComponentFixture<AjouterDonneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterDonneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
