import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffrePage } from './offre.page';

describe('OffrePage', () => {
  let component: OffrePage;
  let fixture: ComponentFixture<OffrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
