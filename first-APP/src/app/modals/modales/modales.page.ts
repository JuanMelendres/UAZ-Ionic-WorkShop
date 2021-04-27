import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modales',
  templateUrl: './modales.page.html',
  styleUrls: ['./modales.page.scss'],
})
export class ModalesPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
