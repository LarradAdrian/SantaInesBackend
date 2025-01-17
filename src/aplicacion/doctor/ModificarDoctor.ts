import { Inject } from "@nestjs/common";
import { IApplicationService } from "src/utilidad/IApplicationService";
import { Either } from "src/utilidad/either";
import { Doctor } from "src/domain/doctor/Doctor";
import { RepositorioDoctor } from "../../domain/repositories/RepositorioDoctor";
import { ModificarDoctorDto } from "./DataTransferObject/ModificarDoctorDto";


export class ModificarDoctor implements IApplicationService<ModificarDoctorDto, Doctor> {    
    private readonly doctorRepositorio: RepositorioDoctor;
    constructor(@Inject('RepositorioDoctor') doctorRepo: RepositorioDoctor){
        this.doctorRepositorio = doctorRepo;
    }
    async execute(dto: ModificarDoctorDto): Promise<Either<Error,Doctor>>{
        let doctor = Doctor.create(dto.nombre, dto.apellido, dto.especialidad, dto.cedula,
                                   dto.telefono, dto.genero, dto.correo,dto.id);
        if(doctor){
            return await this.doctorRepositorio.modificarDoctor(doctor);
        }
      
    }
}
