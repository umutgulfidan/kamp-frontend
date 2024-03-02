import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators  } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService){}

  loginForm:FormGroup;

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message,"Giriş")
        localStorage.setItem("token",response.data.token)
      },responseError=>{
        this.toastrService.error(responseError.error,"Giriş Hatası");
      })
    }
    else{
        this.toastrService.error("Formunuz Eksik","Giriş")
    }
  }

}
