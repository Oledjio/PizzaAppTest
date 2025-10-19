import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { delay, Observable, of } from 'rxjs';

@Component({
    selector: 'app-create-order',
    templateUrl: './create-order.component.html',
    styleUrl: './create-order.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, FormsModule, NgTemplateOutlet],
})
export class CreateOrderComponent implements OnInit {
    public form: FormGroup | undefined;

    get nameControl(): AbstractControl {
        return this.form?.get('name') as AbstractControl;
    }

    get addressControl(): AbstractControl {
        return this.form?.get('address') as AbstractControl;
    }

    get phoneControl(): AbstractControl {
        return this.form?.get('phone') as AbstractControl;
    }

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _confirmationService: ConfirmationService,
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    public submitForm(): void {
        if (!this.form?.valid) {
            this.form?.markAllAsTouched();
            return;
        }

        this.sendOrder(this.form.value).subscribe(() => {
            this._confirmationService.confirm({
                rejectVisible: false,
                header: 'Cпасибо за заказ',
                acceptLabel: 'Закрыть',
                closable: false,
                accept: () => this.form?.reset(),
            });
        });
    }

    public blockDot(event: KeyboardEvent): void {
        if (event.key === '.') {
            event.preventDefault();
        }
    }

    private initForm(): void {
        this.form = this._formBuilder.group({
            name: [null, Validators.required],
            address: [null, Validators.required],
            phone: [null, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
        });
    }

    private sendOrder(body: any): Observable<any> {
        return of({ body }).pipe(delay(1000));
    }
}
