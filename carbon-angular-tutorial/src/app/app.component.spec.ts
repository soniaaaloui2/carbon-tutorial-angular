import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';
import { HeaderComponent } from './header/header.component';
import { AppSwitcherModule, NotificationModule, UserAvatarModule } from '@carbon/icons-angular';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NotificationModule,
        UserAvatarModule,
        AppSwitcherModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'carbon-angular-tutorial'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('carbon-angular-tutorial');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('carbon-angular-tutorial app is running!');
  });
  TestBed.configureTestingModule({
    
    declarations: [HeaderComponent],
    imports: [UIShellModule],
  }
  );
  
});
