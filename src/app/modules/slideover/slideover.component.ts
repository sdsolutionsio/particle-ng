import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {SlideoverText} from '../../shared/models/particle-component-text.model';

@Component({
  selector: 'particle-slideover',
  templateUrl: './slideover.component.html',
  styleUrls: ['./slideover.component.css']
})
export class SlideoverComponent implements AfterViewInit, OnDestroy {

  private _position = 'right';

  slideoverOpen = false;
  visible = false;

  @Input()
  set position(position: string) {
    if (position && ['left', 'right', 'top', 'bottom'].indexOf(position.toLowerCase()) > -1) {
      this._position = position.toLowerCase();
    } else {
      this._position = 'right';
    }
  }

  get position(): string {
    return this._position;
  }

  @Input()
  modal = true;

  @Input()
  width = '300px';

  @Input()
  height = '100px';

  @Input()
  bgClass = 'content_color';

  @Input()
  text: SlideoverText = {
    close: 'Close Slideover'
  } as SlideoverText;

  /**
   * Breakpoint that will make the container take over the screen when it's crossed.
   */
  @Input()
  breakpoint = 769;

  @Output()
  opened = new EventEmitter<any>();

  @Output()
  closed = new EventEmitter<any>();

  @ViewChild('overlay')
  overlay: ElementRef = null as any;

  breakpointExceeded = false;

  constructor() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this._determineBreakpointExceeded(event.target.innerWidth);
  }

  private _determineBreakpointExceeded(innerWidth: number): void {
    if (this.breakpoint) {
      this.breakpointExceeded = innerWidth < this.breakpoint || innerWidth < +this.width.substring(0, this.width.length - 2);
    }
  }

  open(): void {
    this.addModalMask();
    this.slideoverOpen = true;
    this.visible = true;
    this.opened.emit();
  }

  close(): void {
    this.removeModalMask();
    this.slideoverOpen = false;
    this.closed.emit();

    setTimeout(() => this.visible = false, 200);
  }

  toggle(): void {
    if (this.slideoverOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  private addModalMask(): void {
    if (this.modal) {
      this.overlay.nativeElement.classList.add('particle_dialog_overlay');
      document.body.classList.add('scroll_none');
    }
  }

  private removeModalMask(): void {
    if (this.modal) {
      this.overlay.nativeElement.classList.remove('particle_dialog_overlay');
      document.body.classList.remove('scroll_none');
    }
  }

  ngOnDestroy(): void {
    this.removeModalMask();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._determineBreakpointExceeded(window.innerWidth)
    }, 100);
  }

}
