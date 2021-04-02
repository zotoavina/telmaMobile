import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoForfaitPage } from './info-forfait.page';

describe('InfoForfaitPage', () => {
  let component: InfoForfaitPage;
  let fixture: ComponentFixture<InfoForfaitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoForfaitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoForfaitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
