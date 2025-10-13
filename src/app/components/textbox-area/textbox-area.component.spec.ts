import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxAreaComponent } from './textbox-area.component';

describe('TextboxAreaComponent', () => {
  let component: TextboxAreaComponent;
  let fixture: ComponentFixture<TextboxAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextboxAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextboxAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
