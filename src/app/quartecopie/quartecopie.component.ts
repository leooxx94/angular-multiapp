import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { RestServiceService } from '../rest-service.service';
import { interval, mergeMap } from 'rxjs';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CassoniService } from '../cassoni.service';

@Component({
  selector: 'app-quartecopie',
  templateUrl: './quartecopie.component.html',
  styleUrls: ['./quartecopie.component.css']
})
export class QuartecopieComponent implements OnInit {

  account = {
    destemail: "",
    mitemail: "",
    msg: "",
    sbj: ""
  }

  show = false;
	autohide = true;

  warning = false
  success = false
  foto = false
  showSpinner: boolean = false;
  showPdf: boolean = false;
  isLoading: boolean = false;

  pdf = false;

  err : any = null

  constructor(private restService: RestServiceService, private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get("http://192.168.1.112:8088/api/clean", { responseType: "text" }).subscribe(response => {
    }
    )

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    interval(3000)
    .pipe(
        mergeMap(() => this.http.get("http://192.168.1.112:8088/api/foto", { responseType: "text" }))
    )
    .subscribe(response => {
          
        if(response == "FOTO FATTA"){
          this.foto = true
          console.log(this.foto)
        }else{
          console.log(this.foto)
          this.foto = false
        }
        setTimeout(() =>{
          this.foto=false;
    
      }, 3000);
        
      })

  }
  
  tempurl = "";
  title = 'ang-piperdife';
  pdfSrc!: Uint8Array;
  byteArray!: Uint8Array;

  send(){
    
    //window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let url = "http://192.168.1.112:8089/api/credentials"
    let uri = "http://192.168.1.112:8089/api/rename"

    //let request: any = {email : "leonardofedi5@gmail.com"}
    if(!this.account.mitemail.includes("@") || !this.account.destemail.includes("@")){
      this.warning = true;
    }
    
    this.http.post(url, this.account, { headers: headers 
    }).subscribe(response => { console.log("post: " +response); this.err = null;})

    setTimeout(() =>{
      this.warning=false;

  }, 5000);

  setTimeout(() =>{
    this.http.post(uri, this.account.destemail, {headers: headers}).subscribe(response => {
      console.log(response)
    })
}, 5000);
    

  setTimeout(() =>{

    console.log(this.account)
    this.http.get("http://192.168.1.112:8089/errors", { responseType: "text" }).subscribe(response => {
      
    if(response == "errore"){
      this.warning = true
      setTimeout(() =>{
        this.warning=false;
  
    }, 5000);

    }else if(this.warning==true){
      this.success = false
    }else{
      this.success = true
      setTimeout(() =>{
        this.success=false;
  
    }, 3000);
    }


    this.err = response
    console.log("get: " +this.err)
  }
  )


}, 1000);

    console.log("email inviata a " + this.account.destemail);

    setTimeout(() =>{
      this.showPdf = false;
    }, 2000);
    
  }

  close(){
      this.http.get("http://192.168.1.112:8088/api/clean", { responseType: "text" }).subscribe(response => {
    }
    )
  
  setTimeout(() =>{
    window.location.reload();
  }, 500);
  }

  creaPdf(){
    this.showSpinner = true;
    this.showPdf = false;
      setTimeout(() =>{

        this.http.get("http://192.168.1.112:8088/api/printpdf", { responseType: "text" }).subscribe(response => {
      }
      )
    }, 1000);

    setTimeout(() =>{

      this.http.get("http://192.168.1.112:8089/api/pdf", { responseType: "arraybuffer" }).subscribe(response => {
        console.log(response)
        if(response != null){this.byteArray = new Uint8Array(response as ArrayBuffer)}
        setTimeout(() => {
          this.showPdf = true;
          this.showSpinner = false;
        }, 500)
        
    }
    )
  }, 4000);

  }

  updateFoto(){
    
    setTimeout(() =>{
      this.foto=false;

  }, 2000);
  
  }

}
