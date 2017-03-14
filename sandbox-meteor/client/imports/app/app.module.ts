import {NgModule, ErrorHandler} from '@angular/core';
import {MyApp} from './app.component';
import {IonicModule, IonicApp, IonicErrorHandler} from 'ionic-angular';
import {ChatsPage} from "../pages/chats/chats";

@NgModule({
    declarations: [
        MyApp,
        ChatsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
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