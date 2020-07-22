import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlobalChatsPage } from './global-chats.page';

describe('GlobalChatsPage', () => {
  let component: GlobalChatsPage;
  let fixture: ComponentFixture<GlobalChatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalChatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
