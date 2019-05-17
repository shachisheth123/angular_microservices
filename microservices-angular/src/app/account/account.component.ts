import { Component, OnInit } from '@angular/core';
import { BankAccount } from './account';
import {AccountService} from './account.service';

@Component({
    templateUrl:'./account.component.html'
    // selector:"account-component"
})
export class AccountComponent implements OnInit{
  accounts:BankAccount;

  constructor(private accountService: AccountService){}
  ngOnInit(){
      this.accounts= new BankAccount();
  }

  addNewAccount(){
      alert("method");
        console.log(this.accounts);
      this.accountService.addNewAccount(this.accounts).subscribe((data)=>{
           console.log("success");
           if(data!=null){
              alert("done");
              
           }
      });
  }
}