import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    OnDestroy,
    Output,
    ViewChild
} from '@angular/core';

export enum DIALOG_SIZES {
    LARGE = 'l',
    SMALL = 's',
    MEDIUM = 'm'
}

@Component({
    selector: 'ngx-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    exportAs: 'dialog'
})

export class DialogComponent implements OnInit, OnDestroy {
    @Input() animate = true;
    @Input() size: string = DIALOG_SIZES.MEDIUM;
    @ViewChild('dialog') dialog: ElementRef;
    @Output() dialogClosed = new EventEmitter<any>();
    constructor() { }

    /**
     * @author Ahsan Ayaz
     * @desc Adds the `close` event listener to the dialog element on component initiation
     */
    ngOnInit() {
        this.dialog.nativeElement.addEventListener('close', this.onDialogClosed.bind(this));
    }

    /**
     * @author Ahsan Ayaz
     * @desc Remove the `close` event listener to the dialog element on component destruction
     */
    ngOnDestroy() {
        this.dialog.nativeElement.addEventListener('close', this.onDialogClosed.bind(this));
    }

    /**
     * @author Ahsan Ayaz
     * @desc Returns the state of the dialog as whether it is open or not
     * @return whether the dialog is open or not
     */
    get isShown(): boolean {
        return this.dialog.nativeElement.open;
    }

    /**
     * @author Ahsan Ayaz
     * @desc Shows the dialog on the screen
     */
    showDialog() {
        this.dialog.nativeElement.show();
    }

    /**
     * @author Ahsan Ayaz
     * @desc Closes the dialog. (kept the convention same as the HTML element's methods)
     * @param value - the value to fetch when the dialog is closed. Pass a value here so it will be emmitted
     * as an output from this component
     */
    closeDialog(value?: any) {
        this.dialog.nativeElement.close(value);
    }

    /**
     * @author Ahsan Ayaz
     * @desc Shows the dialog as a modal. This makes sure this modal is on top of every other element irrespective
     * of their z-index (this includes previously opened modals too - if any)
     */
    showAsModal() {
        this.dialog.nativeElement.showModal();
    }

    /**
     * @author Ahsan Ayaz
     * @desc Triggers when the <dialog> is closed. Emits an event up with the valuer returned from the dialog.
     */
    onDialogClosed($event) {
        this.dialogClosed.emit(this.dialog.nativeElement.returnValue);
    }
}
