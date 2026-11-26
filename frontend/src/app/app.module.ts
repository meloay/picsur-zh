import { PortalModule } from '@angular/cdk/portal';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';
import { MatPaginatorIntl } from '@angular/material/paginator';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { GuardsModule } from './guards/guards.module';
import { ApiErrorManagerModule } from './util/api-error-manager/api-error-manager.module';
import { CompatibilityManagerModule } from './util/compatibilitiy-manager/compatibility-manager.module';
import { SnackBarManagerModule } from './util/snackbar-manager/snackbar-manager.module';

registerLocaleData(localeZh);
moment.locale('zh-cn');

function chinesePaginator(): MatPaginatorIntl {
  const intl = new MatPaginatorIntl();
  intl.itemsPerPageLabel = '每页条数';
  intl.nextPageLabel = '下一页';
  intl.previousPageLabel = '上一页';
  intl.firstPageLabel = '首页';
  intl.lastPageLabel = '末页';
  intl.getRangeLabel = (page, size, length) => {
    if (!length || !size) return `共 ${length} 条`;
    return `第 ${page * size + 1}–${Math.min((page + 1) * size, length)} 条，共 ${length} 条`;
  };
  return intl;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortalModule,
    MatSidenavModule,

    SnackBarManagerModule.forRoot(),
    CompatibilityManagerModule,
    ApiErrorManagerModule,

    GuardsModule,
    AppRoutingModule,

    HeaderModule,
    FooterModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'zh-CN' },
    { provide: MatPaginatorIntl, useFactory: chinesePaginator },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline', color: 'accent' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
