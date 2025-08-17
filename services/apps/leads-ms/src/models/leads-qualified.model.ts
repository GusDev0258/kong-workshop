import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  HasOne,
} from 'sequelize-typescript';
import { LeadClosed } from './leads-closed.model';

@Table({
  tableName: 'leads_qualified',
  timestamps: false,
})
export class LeadQualified extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING, field: 'mql_id' })
  mqlId: string;

  @Column({ type: DataType.DATE, field: 'first_contact_date' })
  firstContactDate: Date;

  @Column({ type: DataType.STRING, field: 'landing_page_id' })
  landingPageId: string;

  @Column(DataType.STRING)
  origin: string;

  @HasOne(() => LeadClosed)
  closedLead: LeadClosed;
}
