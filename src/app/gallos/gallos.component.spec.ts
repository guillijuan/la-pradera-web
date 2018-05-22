/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GallosComponent } from './gallos.component';

describe('GallosComponent', () => {
  let component: GallosComponent;
  let fixture: ComponentFixture<GallosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
