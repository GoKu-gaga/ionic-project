import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams,
  ModalController,
  LoadingController
} from 'ionic-angular';
import {
  LoginPage
} from '../login/login'

import { Storage } from '@ionic/storage'
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import { UserPage } from '../user/user';
import { UserdatalistPage } from '../userdatalist/userdatalist';
import { ScanPage } from '../scan/scan';
import { SettingsProvider } from '../../providers/settings/settings';
import { VersionsPage } from '../versions/versions';
/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage extends BaseUI {

  public notLogin: boolean = true;
  public logined: boolean = false;
  headface: string;
  userinfo: string[];
  selectedTheme: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public storage: Storage,
    public loadCtrl: LoadingController,
    public rest: RestProvider,
    private settings: SettingsProvider) {
    super();
    
    settings.getActiveTheme().subscribe(val => this.selectedTheme = val)
  }

  showModal() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.onDidDismiss(() => {
      this.loadUserPage();
    })
    modal.present();
  }

  ionViewDidEnter() {
    this.loadUserPage();
  }

  loadUserPage() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        var loading = super.showLoading(this.loadCtrl, '加载中...')
        this.rest.getUserInfo(val)
          .subscribe(
            userinfo => {
              this.userinfo = userinfo;
              this.headface = userinfo['UserHeadface'] + '?' + (new Date()).valueOf();
              this.notLogin = false;
              this.logined = true;
              loading.dismiss();
            }
          )
      } else {
        this.notLogin = true;
        this.logined = false;
      }
    })
  }

  gotoDatalist(type) {
    this.navCtrl.push(UserdatalistPage, { 'dataType': type })
  }

  gotoUserPage() {
    this.navCtrl.push(UserPage)
  }

  toggleChangeTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    }
    else {
      this.settings.setActiveTheme('dark-theme');
    }
  }

  gotoScanQRCode() {
    this.navCtrl.push(ScanPage, null, {'animate': false});
  }

  gotoVersions() {
    this.navCtrl.push(VersionsPage);
  }
}
