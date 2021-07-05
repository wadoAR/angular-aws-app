import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {HomeComponent} from './home/home/home.component';
import {SidebarModule} from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TopbarComponent} from './shared/topbar/topbar.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {FooterComponent} from './shared/footer/footer.component';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {AboutComponent} from './static/about/about.component';
import {TermsAndConditionsComponent} from './static/terms-and-conditions/terms-and-conditions.component';
import {SupportComponent} from './static/support/support.component';
import {LoginComponent} from './authentication/login/login.component';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HomeComponent,
        TopbarComponent,
        FooterComponent,
        AboutComponent,
        TermsAndConditionsComponent,
        SupportComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SidebarModule,
        InputTextModule,
        PanelMenuModule,
        ScrollPanelModule,
        MenuModule,
        ButtonModule,
        CardModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
