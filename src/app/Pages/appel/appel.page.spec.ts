import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppelPage } from './appel.page';

describe('AppelPage', () => {
  let component: AppelPage;
  let fixture: ComponentFixture<AppelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
