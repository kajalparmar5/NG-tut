import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhavnagarComponent } from './bhavnagar.component';

describe('BhavnagarComponent', () => {
  let component: BhavnagarComponent;
  let fixture: ComponentFixture<BhavnagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhavnagarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhavnagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
