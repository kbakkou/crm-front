import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Client } from 'src/app/clients/models/client';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { StateOrder } from '../../enums/state-order';
import { Order } from '../../models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() public init!: Order;
  @Output() public submitted: EventEmitter<Order>;
  public clients$: BehaviorSubject<Client[]>;
  public form!: FormGroup;
  public states: string[];

  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService
  ) {
    this.clients$ = this.clientsService.collection$;
    this.submitted = new EventEmitter();
    this.states = Object.values(StateOrder);
  }

  ngOnInit(): void {
    console.log(this.init);
    this.form = this.formBuilder.group({
      typePresta: [this.init.typePresta],
      designation: [this.init.designation],
      client: [this.init.client],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
  }
}
