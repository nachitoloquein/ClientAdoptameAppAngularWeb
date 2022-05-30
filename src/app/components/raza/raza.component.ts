import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Raza } from 'src/app/model/raza';
import { RazaService } from 'src/app/services/raza.service';

@Component({
  selector: 'app-raza',
  templateUrl: './raza.component.html',
  styleUrls: ['./raza.component.css']
})
export class RazaComponent implements OnInit {

  constructor(public razaService: RazaService) { }

  ngOnInit(): void {
    this.getRazas();
  }

  getRazas() {
    this.razaService.getRazas().subscribe(
      res => {
        this.razaService.razas = res;
      },
      err => console.log(err)
    );
  }

  addRaza(form: NgForm) {
    if(form.value._id){
      this.razaService.putRaza(form.value).subscribe(
        res=>{
          this.getRazas();
          form.reset();
        },
        err=> console.log(err)
      )
    }
    else{
    this.razaService.createRaza(form.value).subscribe(
      res => {
        this.getRazas();
        form.reset();
      },
      err => console.log(err)
    )
    }
  }

  deleteRaza(id: string) {
    if (confirm('Estás seguro que deseas eliminarlo?')) {
      this.razaService.deleteRaza(id).subscribe(res => {
        this.getRazas();
      },
        err => console.log(err));
    };
  }

  editRaza(raza:Raza){
    this.razaService.selectedRaza = {
      ...raza
    }
  }

  resetForm(form: NgForm){
    form.reset();
  }

}
