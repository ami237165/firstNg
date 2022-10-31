import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductstListComponent } from './productst-list.component';

describe('ProductstListComponent', () => {
  let component: ProductstListComponent;
  let fixture: ComponentFixture<ProductstListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductstListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
