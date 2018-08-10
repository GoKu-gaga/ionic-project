import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'

import { HomePage } from '../pages/home/home';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { ChatPage } from '../pages/chat/chat';
import { NotificationPage } from '../pages/notification/notification';
import { MorePage } from '../pages/more/more';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { UserPage } from '../pages/user/user';
import { HeadfacePage } from '../pages/headface/headface';
import { QuestionPage } from '../pages/question/question';
import { DetailsPage } from '../pages/details/details';
import { AnswerPage } from '../pages/answer/answer';
import { ChatdetailsPage } from '../pages/chatdetails/chatdetails';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { IonicStorageModule } from '@ionic/storage';
import { EmojiProvider } from '../providers/emoji/emoji';
import { ComponentsModule } from '../components/components.module'
//导入四个外部加载进来的组件
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { ChatserviceProvider } from '../providers/chatservice/chatservice';

import { RelativetimePipe } from '../pipes/relativetime/relativetime'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    DetailsPage,
    AnswerPage,
    ChatdetailsPage,
    TabsPage,
    RelativetimePipe
  ],
  imports: [
    BrowserModule,
    HttpModule, // 全局需要导入HTTP
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回'
    }),
    ComponentsModule,
    IonicStorageModule.forRoot() // 全局定义 Storage 的模块
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    DetailsPage,
    AnswerPage,
    ChatdetailsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider, // REST的定义导入
    File,
    Transfer,
    FilePath,
    Camera,
    EmojiProvider,
    ChatserviceProvider
  ]
})
export class AppModule {}
