import { getLocaleId } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as alertify from 'alertifyjs';
import { AlertifyService } from 'src/app/services/alertify.service';




@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

onreset() {
throw new Error('Method not implemented.');
}
  registrationForm!: FormGroup;
userSubmitted:boolean=false;
  user!: User;

constructor(private fb: FormBuilder, private userService:UserServiceService, private alertifyService:AlertifyService){ }

  ngOnInit(){
    this.registrationForm= this.fb.group({
      userName:[null, Validators.required],
      email:[null, [Validators.required, Validators.email]],
      password:[null,[Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required,Validators.pattern(/^[0-9]{10}$/) ]]
    
    },  {validator: this.passwordMatchingValidator});
  }
 passwordMatchingValidator(fg:FormGroup): ValidationErrors | null{
  
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : { notmatched: true };
 }
 userData():User{
  return this.user={
    userName: this.userName.value,
    email:this.email.value,
    password: this.password.value,
    mobile: this.mobile.value

  }
}
  get userName(){
      return this.registrationForm.get('userName') as FormControl
  }
  get email()
  {
    return this.registrationForm.get('email') as FormControl

  }

  get password()
  {
    return this.registrationForm.get('password') as FormControl
  }
    get confirmPassword()
    {
      return this.registrationForm.get('confirmPassword') as FormControl
      
    }
    get mobile(){
      return this.registrationForm.get('mobile') as FormControl
      
      }
  onSubmit() {
    this.userSubmitted=true;
    if(this.registrationForm.valid)
    {
      console.log(this.registrationForm.value);
      //this.user=Object.assign(this.user,this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted=false;
      this.alertifyService.success('Congrats, You are successfully registered ');
    } else{this.alertifyService.error('Kindly provide the required fields '); }

  }
 
    

}
