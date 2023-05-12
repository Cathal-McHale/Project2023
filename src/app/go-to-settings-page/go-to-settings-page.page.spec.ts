import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoToSettingsPagePage } from './go-to-settings-page.page';

describe('GoToSettingsPagePage', () => {
  let component: GoToSettingsPagePage;
  let fixture: ComponentFixture<GoToSettingsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GoToSettingsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
