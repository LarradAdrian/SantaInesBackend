import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { AppointmentEntity } from './appointment.entity';

@Entity({ name: 'patient'})
export class PatientEntity {
  @PrimaryGeneratedColumn("uuid")
  ID: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  birthday: Date;

  @Column()
  id_number: string;

  @Column()
  address: string;

  @Column()
  phone_number: string;

  @Column()
  gender: string;

  @Column()
  email: string;

  // @OneToMany(() => AppointmentEntity, appointment => appointment.patient_id)
  @Column()
  appointment: string;
}
