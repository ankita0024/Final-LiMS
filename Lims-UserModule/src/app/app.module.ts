import { ReportsPage } from './../pages/reports/reports';
import { TransferAdminPage } from './../pages/transfer-admin/transfer-admin';
import { RolesPage } from './../pages/roles/roles';
import { ListPage } from './../pages/list/list';
import { BooksReturnedPage } from './../pages/books-returned/books-returned';
import { BooksRequestedPage } from './../pages/books-requested/books-requested';
import { BookReadPage } from './../pages/bookRead/bookRead';
import { ApprovalsPage } from './../pages/approvals/approvals';
import { AddBooksPage } from './../pages/add-books/add-books';
import { LimsAdminComponent } from './lims-admin/lims-admin.component';
import { LimsUserComponent } from './lims-user/lims-user.component'; 

import { Http } from '@angular/http';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HelpPage} from '../pages/help/help';
import { NotificationPage } from '../pages/notification/notification';
import { SearchPage } from './../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AcknowledgementPage} from '../pages/acknowledgement/acknowledgement';
import {RecommendationPage} from '../pages/recommendation/recommendation';
import {WishListPage} from '../pages/wishList/wishList';
import {FilterPage} from '../pages/filter/filter';
import { Search } from '../providers/search.service';

import { AdminHomeBodyService} from '../providers/admin-home-body.service';
import { HomeBodyService } from '../providers/home-body.service';

import {AdalService} from 'ng2-adal/core';
import {Authenticate} from '../providers/authenticate';
import { APP_BASE_HREF,HashLocationStrategy,LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    HelpPage,
    NotificationPage,
    HomePage,
    TabsPage,
    RecommendationPage,
    WishListPage,
    AcknowledgementPage,
    FilterPage,
    LimsUserComponent,
    LimsAdminComponent,
    AddBooksPage,
    ApprovalsPage,
    BookReadPage,BooksRequestedPage,
    BooksRequestedPage,
    ListPage,
    ReportsPage,
    RolesPage,TransferAdminPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LimsUserComponent,
    SearchPage,
    HelpPage,
    NotificationPage,
    HomePage,
    TabsPage,
     RecommendationPage,
    WishListPage,
    AcknowledgementPage,
    FilterPage,    
    LimsAdminComponent,
     AddBooksPage,
    ApprovalsPage,
    BookReadPage,BooksRequestedPage,
    BooksRequestedPage,
    ListPage,
    ReportsPage,
    RolesPage,TransferAdminPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},AdminHomeBodyService,HomeBodyService,Authenticate,Search,AdalService,{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule {}
