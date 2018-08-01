import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BaseUI {

  mobile: any;
  nickName: any;
  password: any;
  errorMessage: any;
  confirmPassword: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public toastCtrl: ToastController) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  gotoLogin() {
    this.navCtrl.pop();
  }

  doRegister() {
    // 前台验证表单
    if (!(/^1[34578]\d{9}$/.test(this.mobile))) {
      super.showToast(this.toastCtrl, '手机号码格式不正确！')
    } else if (this.nickName.length < 3 || this.nickName.length > 10) {
      super.showToast(this.toastCtrl, '昵称长度应该在 3 - 10位之间。')
    } else if (this.password.length < 6 || this.password.length > 20 || this.confirmPassword.length < 6 || this.confirmPassword.length > 20) {
      super.showToast(this.toastCtrl, '密码的长度应该在 6 - 20 之间。')
    } else if (this.password != this.confirmPassword) {
      super.showToast(this.toastCtrl, '两次输入密码不匹配。')
    } else {
      var loading = super.showLoading(this.loadingCtrl, '注册中...');
      this.rest.register(this.mobile, this.nickName, this.password)
        .subscribe(
          f => {
            if (f['Status'] == 'OK') {
              loading.dismiss();
              super.showToast(this.toastCtrl, '注册成功');
              this.dismiss();
            } else {
              loading.dismiss();
              super.showToast(this.toastCtrl, f['StatusContent']);
            }
          },
          error => this.errorMessage = <any>error);

    }
  }
}
