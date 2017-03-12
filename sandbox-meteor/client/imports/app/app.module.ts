import {NgModule, ErrorHandler} from '@angular/core';
import {MyApp} from './app.component';
import {IonicModule, IonicApp, IonicErrorHandler} from 'ionic-angular';

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}