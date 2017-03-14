import {NgModule, ErrorHandler} from '@angular/core';
import {IonicModule, IonicApp, IonicErrorHandler} from 'ionic-angular';
import {MomentModule} from 'angular2-moment';
import {MyApp} from './app.component';
import {ChatsPage} from "../pages/chats/chats";

@NgModule({
    declarations: [
        MyApp,
        ChatsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        MomentModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ChatsPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}