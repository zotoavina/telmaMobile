import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForfaitPage } from './forfait.page';

describe('ForfaitPage', () => {
  let component: ForfaitPage;
  let fixture: ComponentFixture<ForfaitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForfaitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForfaitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
