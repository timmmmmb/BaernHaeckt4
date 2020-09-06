import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BarcodeFormat} from '@zxing/library';
import {PurchasesService} from "../../services/purchases.service";
import {UserService} from "../../services/user.service";
import {Purchase} from "../../models/purchase";
import {User} from "../../models/user";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;

  hasDevices: boolean;
  hasPermission: boolean;

  qrResultString: string;

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;

  enabledFormats: BarcodeFormat[] = [BarcodeFormat.QR_CODE];

  scanStatus = 0;
  scanStatusColor: string;
  scanEnabled = false;

  doneDisabled = true;
  test: string;

  customer: User = null;
  purchase: Purchase = null;

  constructor(private purchsesService: PurchasesService, private userService: UserService) { }

  ngOnInit() {
    this.scanStatusColor = 'black';
  }

  clearResult() {
    this.qrResultString = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]) {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    if (this.scanEnabled) {
      this.qrResultString = resultString;
      this.onScanStatusChanged(2);

      this.purchsesService.getPurchaseByQRCode(this.qrResultString).subscribe((purchase: Purchase) => {
        if (purchase) {
          this.purchase = purchase;
          this.customer = purchase.user;
        }
      });
    }
  }

  onDeviceSelectChange(selected: string) {
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  onTorchCompatible(isCompatible: boolean) {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch() {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder() {
    this.tryHarder = !this.tryHarder;
  }

  onScanStatusChanged(scanStatus) {
    this.scanStatus = scanStatus;

    switch (this.scanStatus) {
      case 0:
        this.scanStatusColor = 'black';
        this.doneDisabled = true;
        break;
      case 1:
        this.scanStatusColor = 'yellow';
        this.scanEnabled = true;
        setTimeout(() => {
          if (this.scanStatus === 1) {
            this.onScanStatusChanged(3);
          }
        }, 4000);
        break;
      case 2:
        this.scanStatusColor = 'green';
        this.scanEnabled = false;
        this.doneDisabled = false;
        break;
      case 3:
        this.scanStatusColor = 'red';
        this.scanEnabled = false;
        this.doneDisabled = false;
        break;
      default:
        this.scanStatusColor = 'black';
        break;
    }
  }

  refresh() {
    this.onScanStatusChanged(0);
    this.clearResult();
    this.customer = null;
    this.purchase = null;
  }

  private formatDate(date: Date): string {
    // To solve issues with different date types
    date = new Date(date.toString());
    let dd: string = date.getDate().toString();
    let mm: string = date.getMonth().toString();
    const yyyy: string = date.getFullYear().toString();

    if (dd.length < 2) {
      dd = '0' + dd;
    }
    if (mm.length < 2) {
      mm = '0' + mm;
    }

    return `${dd}.${mm}.${yyyy}`;
  }
}

