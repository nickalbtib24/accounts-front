import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-fetch-account',
  templateUrl: './fetch-account.component.html',
  styleUrls: ['./fetch-account.component.css']
})
export class FetchAccountComponent implements OnInit {

  public formData: FormGroup;
  public formSuccess: string;
  public formError: string;
  public success = false;
  public name = '';
  public document = '';
  public balance = 0;
  constructor(
    private service: AccountService
  ) { 
    this.formData = new FormGroup({
      documentNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9\s]*$/)
      ])
    });
  }

  ngOnInit(): void {
  }

  fetchAccount(): void {
    this.success = false;
    this.formError = '';
    this.formSuccess = '';
    if (this.formData.status === 'VALID') {
      const documentNumber = this.formData.get('documentNumber').value;
      this.service.fetchAccount(documentNumber).subscribe((response: any) => {
        this.formSuccess = "Consulta resilizada exitosamente";
        this.name = response.account.name;
        this.document = response.account.documentNumber;
        this.balance = response.account.balance;
        this.success = true;
      }, (error) => {
        this.formError = error.error.message;
      });
    }
  }

}
