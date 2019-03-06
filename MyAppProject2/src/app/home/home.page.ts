import { Component } from '@angular/core';
import { Platform, ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(
  public platform: Platform,
  public actionsheetCtrl: ActionSheetController
 ) {}
async openMenu() {
  const actionSheet = await this.actionsheetCtrl.create({
  header: 'Albums',
  cssClass: 'action-sheets-basic-page',
  buttons: [
  {
  text: 'Delete',
  role: 'destructive',
  icon: !this.platform.is('ios') ? 'trash' : null,
  handler: () => {
  console.log('Delete clicked');
  }
  },
  {
  text: 'Share',
  icon: !this.platform.is('ios') ? 'share' : null,
  handler: () => {
  console.log('Share clicked');
  }
  },
  {
  text: 'Play',
  icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
  handler: () => {
    console.log('Play clicked');
    }
    },
    {
    text: 'Favorite',
    icon: !this.platform.is('ios') ? 'heart-empty' : null,
    handler: () => {
    console.log('Favorite clicked');
    }
    },
    {
    text: 'Cancel',
    role: 'cancel',
 icon: !this.platform.is('ios') ? 'close' : null,
 handler: () => {
 console.log('Cancel clicked');
 }
 }
 ]
 });
 await actionSheet.present();

 @Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
}
}
 }
}
