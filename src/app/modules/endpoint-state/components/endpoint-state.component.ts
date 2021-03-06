import {Component, Input} from '@angular/core';

/**
 * Component to display different endpoint states
 */
@Component({
  selector: 'particle-endpoint-state',
  templateUrl: './endpoint-state.component.html',
  styleUrls: ['./endpoint-state.component.css']
})
export class EndpointStateComponent {

  /**
   * Flag to determine if in loading state
   */
  @Input()
  loading: boolean = false;

  /**
   * Icon for loading state
   */
  @Input()
  loadingIcon: 'double_helix' | string = 'double_helix';

  /**
   * Main text for loading state
   */
  @Input()
  loadingText = 'Loading';

  /**
   * Subtext for loading state
   */
  @Input()
  loadingSubtext: string = null as any;

  /**
   * Flag to determine if in empty state
   */
  @Input()
  empty: boolean = false;

  /**
   * Icon for empty state
   */
  @Input()
  emptyIcon = 'fas fa-folder-open fa-fw fa-3x';

  /**
   * Text for loading state
   */
  @Input()
  emptyText = 'There\'s nothing here yet.';

  /**
   * Subtext for empty state
   */
  @Input()
  emptySubtext: string = null as any;

  /**
   * Flag to determine if in error state
   */
  @Input()
  error: boolean = false;

  /**
   * Icon for error state
   */
  @Input()
  errorIcon = 'fas fa-bomb fa-fw fa-3x';

  /**
   * Main text for error state
   */
  @Input()
  errorText = 'An error has occurred';

  /**
   * Subtext for error state
   */
  @Input()
  errorSubtext = 'Please try again';

  /**
   * Flag to determine if overlay spinner
   */
  @Input()
  loadingOverlay: boolean = false;

  /**
   * The icon on the overlay spinner
   */
  @Input()
  loadingOverlayIcon = 'fas fa-spinner fa-spin';

  /**
   * Main text for loading overlay
   */
  @Input()
  loadingOverlayText: string = null as any;

  /**
   * Subtext for loading overlay
   */
  @Input()
  loadingOverlaySubtext: string = null as any;

  /**
   * Component constructor
   */
  constructor() { }

}
