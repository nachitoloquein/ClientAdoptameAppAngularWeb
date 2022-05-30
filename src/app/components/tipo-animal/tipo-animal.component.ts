import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipoAnimalService } from 'src/app/services/tipo-animal.service';
import { TipoAnimal } from 'src/app/model/tipoAnimal';

@Component({
  selector: 'app-tipo-animal',
  templateUrl: './tipo-animal.component.html',
  styleUrls: ['./tipo-animal.component.css']
})
export class TipoAnimalComponent implements OnInit {

  constructor(public tipoAnimalService: TipoAnimalService) { }

  ngOnInit(): void {
    this.getTiposAnimal();
  }

  getTiposAnimal() {
    this.tipoAnimalService.getTipoAnimales().subscribe(
      res => {
        this.tipoAnimalService.tiposAnimales = res;
      },
      err => console.log(err)
    );
  }

  addTipoAnimal(form: NgForm) {
    if(form.value._id){
      this.tipoAnimalService.putTipoAnimal(form.value).subscribe(
        res=>{
          this.getTiposAnimal();
          form.reset();
        },
        err=> console.log(err)
      )
    }
    else{
    this.tipoAnimalService.createTipoAnimal(form.value).subscribe(
      res => {
        this.getTiposAnimal();
        form.reset();
      },
      err => console.log(err)
    )
    }
  }

  deleteTipoAnimal(id: string) {
    if (confirm('Estás seguro que deseas eliminarlo?')) {
      this.tipoAnimalService.deleteTipoAnimal(id).subscribe(res => {
        this.getTiposAnimal();
      },
        err => console.log(err));
    };
  }

  editTipoAnimal(tipoAnimal: TipoAnimal){
    this.tipoAnimalService.selectedTipoAnimal = {
      ...tipoAnimal
    }
  }

  resetForm(form: NgForm){
    form.reset();
  }

}
