import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

interface addcass {
  id: string;
  partner: string;
  dataInizio: String;
  dataFine: String;
}

@Component({
  selector: 'app-anagrafica-cassoni',
  templateUrl: './anagrafica-cassoni.component.html',
  styleUrls: ['./anagrafica-cassoni.component.css']
})
export class AnagraficaCassoniComponent {

  constructor(private http: HttpClient){}

  cassoneValue: string = '';
  tipoValue: string = '';
  descValue: string = '';
  propValue: string = '';
  noteValue: string = '';

  response: string = '';

  showToast: boolean = false;
  showToastMissCass: boolean = false;
  showToastError: boolean = false;

  cassArray: string[] = [];
  listaCass: addcass[] = [];

  showSuccessToast() {
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  showInsuccessToast() {
    this.showToastMissCass = true;

    setTimeout(() => {
      this.showToastMissCass = false;
    }, 3000);
  }

  showErrorToast() {
    this.showToastError = true;

    setTimeout(() => {
      this.showToastError = false;
    }, 3000);
  }

  salvaArray() {

    if(this.cassoneValue == null || this.cassoneValue == ''){
      this.showInsuccessToast();

    }else{

      const url = 'http://192.168.1.112:8090/api/addcass';
      this.cassArray.push(this.cassoneValue, this.tipoValue, this.descValue, this.noteValue);
  
      console.log(this.cassArray)
  
      this.http.post(url, this.cassArray).subscribe(response => {
          console.log("response: " + this.response);
      },

      (error) => {

        console.error('Errore durante la richiesta:', error);
  
        if (error.status) {
          console.log('Status della richiesta:', error.status);
          if(error.status === 200){
            this.showSuccessToast();
          }else{
            this.showErrorToast();
          }
        }else{
          this.showErrorToast();
        }
      },
      () => {

        console.log('Richiesta completata con successo.');
      }
    );

      this.cassArray = [];

    }

  }

  delArray(){

    this.cassArray = [];
    this.cassoneValue = '';
    this.tipoValue = '';
    this.descValue = '';
    this.noteValue = '';

  }

}
