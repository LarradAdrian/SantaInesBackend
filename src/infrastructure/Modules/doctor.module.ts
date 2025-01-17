import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuscarDoctores } from 'src/aplicacion/doctor/BuscarDocotres';
import { BuscarDoctorPorCorreo } from 'src/aplicacion/doctor/BuscarDoctorPorCorreo';
import { BuscarDoctorPorEspecialidad } from 'src/aplicacion/doctor/BuscarDoctorPorEspecialidad';
import { BuscarDoctorPornombre } from 'src/aplicacion/doctor/BuscarDoctorPorNombre';
import { BuscarDoctorPorCedula } from 'src/aplicacion/doctor/BuscarDoctorPorCedula';
import { ModificarDoctor } from 'src/aplicacion/doctor/ModificarDoctor';
import { RegistrarDoctorService } from 'src/aplicacion/doctor/RegistrarDoctro';
import { BorrarDoctor } from 'src/aplicacion/doctor/BorrarDoctor';
import { DoctorEntity } from '../db-entities/doctor.entity';
import { DoctorRepositoryService } from '../Services/DoctorServices/DoctorRepository.service';
import { DoctorController } from '../Controllers/Doctor.controller';


@Module({
  imports: [TypeOrmModule.forFeature([DoctorEntity])],
  providers: [BuscarDoctores,
                BuscarDoctorPorCorreo,
                BuscarDoctorPorEspecialidad,
                BuscarDoctorPornombre,
                BuscarDoctorPorCedula,
                ModificarDoctor,
                RegistrarDoctorService,
                BorrarDoctor,
              {provide:'RepositorioDoctor',
               useClass: DoctorRepositoryService}],
 controllers: [DoctorController],
 
})
export class DoctorModule {}
