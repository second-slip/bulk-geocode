import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BulkRequest } from "./bulk-request/bulk-request";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BulkRequest],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bulk-geocode');
}
