import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { LeadQualified } from './leads-qualified.model';

@Table({
  tableName: 'leads_closed',
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class LeadClosed extends Model {
  @PrimaryKey
  @ForeignKey(() => LeadQualified)
  @Column({ type: DataType.STRING, field: 'mql_id' })
  mqlId: string;

  @Column({ type: DataType.STRING, field: 'seller_id' })
  sellerId: string;

  @Column({ type: DataType.STRING, field: 'sdr_id' })
  sdrId: string;

  @Column({ type: DataType.STRING, field: 'sr_id' })
  srId: string;

  @Column({ type: DataType.DATE, field: 'won_date' })
  wonDate: Date;

  @Column({ type: DataType.STRING, field: 'business_segment' })
  businessSegment: string;

  @Column({ type: DataType.STRING, field: 'lead_type' })
  leadType: string;

  @Column({ type: DataType.STRING, field: 'lead_behaviour_profile' })
  leadBehaviourProfile: string;

  @Column({ type: DataType.BOOLEAN, field: 'has_company' })
  hasCompany: boolean;

  @Column({ type: DataType.BOOLEAN, field: 'has_gtin' })
  hasGtin: boolean;

  @Column({ type: DataType.STRING, field: 'average_stock' })
  averageStock: string;

  @Column({ type: DataType.STRING, field: 'business_type' })
  businessType: string;

  @Column({ type: DataType.INTEGER, field: 'declared_product_catalog_size' })
  declaredProductCatalogSize: number;

  @Column({ type: DataType.FLOAT, field: 'declared_monthly_revenue' })
  declaredMonthlyRevenue: number;

  @BelongsTo(() => LeadQualified)
  qualifiedLead: LeadQualified;
}
