import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BaseUI } from '../../common/baseui';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the DiscoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html',
})
export class DiscoveryPage extends BaseUI {

  questions: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider
  ) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoveryPage');
    this.getQuestions();
  }

  getQuestions() {
    var loading = super.showLoading(this.loadingCtrl, '数据加载中...');
    this.rest.getQuestions()
    .subscribe(
      q => {
        this.questions = q;
        loading.dismiss();
      },
      error => this.errorMessage = <any>error);
  }

  doRefresh(refresher){
    this.getQuestions();
    refresher.complete();
  }

  gotoDetails(questionId) {
    this.navCtrl.push(DetailsPage, { id: questionId });
  }
}
