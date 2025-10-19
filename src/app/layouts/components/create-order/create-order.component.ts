import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-order',
    templateUrl: './create-order.component.html',
    styleUrl: './create-order.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, FormsModule],
})
export class CreateOrderComponent implements OnInit {
    public form: FormGroup | undefined;

    constructor(private readonly _formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.initForm();
    }

    public submitForm(): void {
        console.log(this.form?.value);
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
            phone: [null, Validators.required],
        });
    }
}
