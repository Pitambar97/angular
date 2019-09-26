import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Key } from 'protractor';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 
  constructor() { }
  myGroup:FormGroup;
  ngOnInit() {
    this.myGroup=new FormGroup({
      'infoPerson':new FormGroup({
        firstName: new FormControl('',[Validators.required,Validators.minLength(5)]),
        lastName: new FormControl(''),
        gender: new FormControl(''),
        dob: new FormControl('')
      }),
      'detailsPerson': new FormGroup({
      password: new FormControl('',Validators.required),
      repassword: new FormControl('',Validators.required),
      number: new FormControl(''),
      email: new FormControl('')
    },{validators:this.mustMatch()}),

    'addPerson': new FormGroup({
      addressline1:new FormControl(''),
      addressline2:new FormControl(''),
      city:new FormControl(''),
      pincode:new FormControl('')
    })
    })
  }
  handleSubmit(){
    console.log(this.myGroup.value);
   }
   handleload(){
     console.log("loding");
     this.myGroup.patchValue({
      infoPerson: {firstName:"pitambar"}
     })
   }
   mustMatch():ValidatorFn{
    return(group:FormGroup):{[Key:string]:any} | null=>{
      const password=group.controls.password.value;
      const repassword=group.controls.repassword.value;
    console.log(password,repassword)
    return password===repassword?null:{mismatch:true};
   }
  }
}
