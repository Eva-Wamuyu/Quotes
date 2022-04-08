import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotecomponentComponent } from './quotecomponent.component';

describe('QuotecomponentComponent', () => {
  let component: QuotecomponentComponent;
  let fixture: ComponentFixture<QuotecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
