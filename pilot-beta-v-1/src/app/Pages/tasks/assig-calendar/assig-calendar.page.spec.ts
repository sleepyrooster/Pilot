import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssigCalendarPage } from './assig-calendar.page';

describe('AssigCalendarPage', () => {
  let component: AssigCalendarPage;
  let fixture: ComponentFixture<AssigCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigCalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssigCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
