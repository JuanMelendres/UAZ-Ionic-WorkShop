import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalesPage } from '../modals/modales/modales.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private modalController: ModalController,
  ) {}

  async openModal() {
    console.log("click");
    const openModal = await this.modalController.create({
      component: ModalesPage,
      componentProps: {
        // isEditing: false,
      },
    });
    openModal.onDidDismiss().then((data) => {
      
    });

    return await openModal.present();
  }

}
