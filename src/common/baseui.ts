import { Loading, LoadingController, ToastController, Toast } from "ionic-angular/umd";

/**
 * UI 层的所有公用方法的抽象类
 *
 * @export
 * @abstract
 * @class BaseUI
 */
export abstract class BaseUI {
    constructor() { }

    /**
     *通用展示 Loading 组件
     *
     * @protected
     * @param {LoadingController} loadingCtrl
     * @param {string} message
     * @returns {Loading}
     * @memberof BaseUI
     */
    protected showLoading(loadingCtrl: LoadingController, message: string): Loading {
        let loader = loadingCtrl.create({
            content: message,
            dismissOnPageChange: true // 页面变化自动关闭
        });
        loader.present();
        return loader;
    }

    /**
     * 通用展示 Toast 组件
     *
     * @protected
     * @param {ToastController} toastCtrl
     * @param {string} message
     * @returns {Toast}
     * @memberof BaseUI
     */
    protected showToast(toastCtrl: ToastController, message: string): Toast {
        let toast = toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        return toast;
    }
}