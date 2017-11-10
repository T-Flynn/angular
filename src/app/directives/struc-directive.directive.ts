import { Directive, Input,
  TemplateRef, ViewContainerRef }
  from '@angular/core';

@Directive({
  selector: '[appStrucDirective]'
})
export class StrucDirectiveDirective {

  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appStrucDirective(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer
        .createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}

