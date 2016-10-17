import {
  ViewContainerRef,
  Type,
  Provider, ElementRef
} from '@angular/core';

/**
 * @deprecated cusotm dialogs no longer need to implement this interface
 */
export interface IMdlCustomDialog {
  viewContainerRef: ViewContainerRef;
}

/**
 * The simple Dialog can have as much actions as needed by the user.
 */
export interface IMdlDialogAction {
  /**
   * the handler is a callback function. this funciton will be called if
   * the action button was clicked.
   */
  handler: () => void;
  /**
   * the text of the action button
   */
  text: string;
  /**
   * is this a closing aciton? means the action is called if the user pressed the esc key.
   */
  isClosingAction?: boolean;
}

/**
 * Dialog configuration for all dialogs (simple or custom)
 */
export interface IMdlDialogConfiguration {

  /**
   * true if the dialog should be opened as modal.
   */
  isModal?: boolean;

  /**
   * true if the dialogs should animate. defaults to true.
   */
  animate?: boolean

  /**
   * css classes as space delimted list of classes applied to
   * the dialog-host component. (e.g. a b -> <mdl-dialog-host-component class="a b"...
   */
  classes?: any;

  /**
   * Key Value object with additional styles that will be applied to
   * the dialog-host component. for example: {'width': '350px'}
   */
  styles?: {[key: string]: string};

  /**
   * Close the dialog if the user clicks on the backdrop.
   */
  clickOutsideToClose?:boolean;

  /**
   * Element or mouse event the dialog open animation should start from.
   */
  openFrom?: ElementRef | MouseEvent;

  /**
   * Element or mouse event the dialog close animation shoul end.
   */
  closeTo?: ElementRef | MouseEvent;

}

/**
 * The simple dialog. Easy to use - dosn't need a special component.
 */
export interface IMdlSimpleDialogConfiguration extends IMdlDialogConfiguration {
  /**
   * the title of the dialog
   */
  title?: string;
  /**
   * the message that should be displayed (can be html)
   */
  message: string;
  /**
   * the actions that are used for this dialog (the order will be reversed by mdl.
   */
  actions: [IMdlDialogAction];
  /**
   * should the actions be displayed as full width actions. every aciton is one row.
   */
  fullWidthAction?: boolean;
}

/**
 * Configuration for a custom dialog. You need to provide a component that
 * should be used as the content of the dialog. the component must match the
 * fowllowing conditions:
 * - must be an entrycomponent (property of your module)
 * If youn need access to the MdlDialogReference you may inject it in your constructor:
 *
 * export class MyDialog {
 *
 *   constructor(private dialogref: MdlDialogReference){}
 *
 *   ...
 * }
 */
export interface IMdlCustomDialogConfiguration extends IMdlDialogConfiguration {
  component: Type<any>;
  providers?: Provider[];
}
