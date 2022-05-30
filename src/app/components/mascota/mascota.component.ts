import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { RazaService } from 'src/app/services/raza.service';
import { TipoAnimalService } from 'src/app/services/tipo-animal.service';
import { NgForm } from '@angular/forms';
import { Mascota } from 'src/app/model/mascota';


@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  constructor(public mascotaService: MascotaService, public razaService: RazaService, public tipoAnimalService: TipoAnimalService) { }

  ngOnInit(): void {
    this.getMascotas();
    this.getRazas();
    this.getTipoAnimales();
  }

  getRazas() {
    this.razaService.getRazas().subscribe(
      res => {
        this.razaService.razas = res;
      },
      err => console.log(err)
    );
  }

  getTipoAnimales() {
    this.tipoAnimalService.getTipoAnimales().subscribe(
      res => {
        this.tipoAnimalService.tiposAnimales = res;
      },
      err => console.log(err)
    );
  }

  getMascotas() {
    this.mascotaService.getMascotas().subscribe(
      res => {
        this.mascotaService.mascotas = res;
      },
      err => console.log(err)
    );
  }

  addMascota(form: NgForm) {
    if(form.value._id){
      this.mascotaService.putMascota(form.value).subscribe(
        res=>{
          this.getMascotas();
          form.reset();
        },
        err=> console.log(err)
      )
    }
    else{
    this.mascotaService.createMascota(form.value).subscribe(
      res => {
        this.getMascotas();
        form.reset();
      },
      err => console.log(err)
    )
    }
  }

  deleteMascota(id: string) {
    if (confirm('Estás seguro que deseas eliminarlo?')) {
      this.mascotaService.deleteMascota(id).subscribe(res => {
        this.getMascotas();
      },
        err => console.log(err));
    };
  }

  editMascota(mascota:Mascota){
    this.mascotaService.selectedMascota = {
      ...mascota
    }
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
