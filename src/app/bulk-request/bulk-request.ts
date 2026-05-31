import { Component, OnInit } from '@angular/core';
import { BulkRequestHandler } from './bulk-request-handler';

@Component({
  selector: 'app-bulk-request',
  imports: [],
  templateUrl: './bulk-request.html',
  styleUrl: './bulk-request.css'
})
export class BulkRequest implements OnInit {

  constructor(readonly _service: BulkRequestHandler) {}


  ngOnInit(): void {
    this._service._hello();
  }

}
