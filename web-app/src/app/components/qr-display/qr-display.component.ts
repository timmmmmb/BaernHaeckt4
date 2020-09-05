import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-display',
  templateUrl: './qr-display.component.html',
  styleUrls: ['./qr-display.component.css']
})
export class QrDisplayComponent {
  title = 'qr-display';
  elementType = 'url';
  value = 'testvalue';
}
