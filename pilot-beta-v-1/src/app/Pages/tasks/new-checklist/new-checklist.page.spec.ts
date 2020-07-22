import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewChecklistPage } from './new-checklist.page';

describe('NewChecklistPage', () => {
  let component: NewChecklistPage;
  let fixture: ComponentFixture<NewChecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChecklistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewChecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
