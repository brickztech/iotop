import { isDefined } from '@core/utils';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WidgetContext } from '@app/modules/home/models/widget-component.models';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UtilsService } from '@core/services/utils.service';


interface IFrameWidgetSettings {
  frameSrc: string;
}


@Component({
  selector: 'tb-iframe-widget-iotop',
  templateUrl: './iframe-widget-iotop.component.html',
  styleUrls: ['./iframe-widget-iotop.component.scss']
})
export class IframeWidgetIotopComponent extends PageComponent implements OnInit {

  settings: IFrameWidgetSettings;

  @Input()
  ctx: WidgetContext;

  frameSrc: SafeResourceUrl;

  constructor(protected store: Store<AppState>,
              private utils: UtilsService,
              private cd: ChangeDetectorRef,
              private sanitizer: DomSanitizer) {
    super(store);
  }

  ngOnInit(): void {
    this.ctx.$scope.iframeWidget = this;
    this.settings = this.ctx.settings;
    this.frameSrc = this.sanitizer.bypassSecurityTrustResourceUrl(isDefined(this.ctx.settings.frameSrc) ? this.ctx.settings.frameSrc : '');
  }

}
