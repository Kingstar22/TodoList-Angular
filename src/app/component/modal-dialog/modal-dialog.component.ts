import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent  {
    @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

     close(): void {
        this.isConfirmed.emit(false);
    }
}
