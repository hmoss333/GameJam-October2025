import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaserCaptchaComponent } from './phaser-captcha.component';

describe('PhaserCaptchaComponent', () => {
  let component: PhaserCaptchaComponent;
  let fixture: ComponentFixture<PhaserCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhaserCaptchaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhaserCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
