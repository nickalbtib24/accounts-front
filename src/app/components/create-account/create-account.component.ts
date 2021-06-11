import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public formData: FormGroup;
  public formSuccess: string;
  public formError: string;

  constructor(
    private service: AccountService
  ) { 
    this.formData = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/)
      ]),
      documentNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9\s]*$/)
      ]),
      balance: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9\s]*$/)
      ])
    });
  }

  ngOnInit(): void {
  }

  createAccount(): void {
    this.formSuccess = '';
    this.formError = '';
    if (this.formData.status === 'VALID') {
      this.service.createAccount(this.formData.value).subscribe((response: any) => {
        this.formSuccess = "Cuenta creada exitosamente";
      }, (error) => {
        this.formError = error.error.message;
      });
    }
  }
}
