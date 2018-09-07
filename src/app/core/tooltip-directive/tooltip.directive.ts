import {
  ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostListener, Injector, Input, Renderer2,
  ViewContainerRef
} from '@angular/core';
import {TooltipInterface, TooltipPosition} from './tooltip.interface';
import {MoneyTooltipComponent} from './tooltip.component';

@Directive({
  selector: '[money-tooltip]'
})
export class TooltipDirective{
  @Input() public tooltipOptions : TooltipInterface = this.initialOptions;
  @Input() public showOnClick: boolean = this.tooltipOptions.showOnClick;
  @Input() public position?: TooltipPosition = this.tooltipOptions.position;
  @Input() public appendToBody?: boolean = this.tooltipOptions.appendToBody;
  @Input() public template?: any = this.tooltipOptions.template;
  @Input() public autoShowHide?: boolean = this.tooltipOptions.autoShowHide;
  @Input() public isCloseBtn?: boolean = this.tooltipOptions.isCloseBtn;

  private isClear = true;
  private componentRef: ComponentRef<MoneyTooltipComponent>;
  get initialOptions(): TooltipInterface{
    return {
      template: '',
      autoShowHide: false,
      showOnClick: false,
      appendToBody: false,
      isCloseBtn: false,
      position: 'top'
    };
  }
  constructor(
    private ref: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ){}
  @HostListener('mouseover',['$event']) onMouseOver(e) {
    if(!this.isClear || this.showOnClick){
      return true;
    }
    console.log('ssss');
    this.initTooltip();
  }
  @HostListener('mouseleave',['$event']) onMouseLeave(e) {
    console.log('aaaa');
    this.componentRef.destroy();
    this.isClear = true;
  }
  initTooltip(){
    const injector = Injector.create({
      providers: [
        {
          provide: 'tooltipConfig',
          useValue: {
            host: this.ref.nativeElement
          }
        }
      ]
    });
    let componentFactory: any;
    componentFactory = this.componentFactoryResolver.resolveComponentFactory(MoneyTooltipComponent);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory, 0, injector, this.generateNgContent());
    this.componentRef.instance.template = this.template;
    this.ref.nativeElement.appendChild(this.componentRef.location.nativeElement);
    this.isClear = false;
  }
  private generateNgContent() {
    if (typeof this.template === 'string') {
      const element = this.renderer.createText(this.template);
      return [[element]];
    }
  }
}
