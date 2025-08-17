import { Module } from '@nestjs/common';
import { LeadsMsController } from './leads-ms.controller';
import { LeadsMsService } from './leads-ms.service';
import { LeadClosed } from './models/leads-closed.model';
import { LeadQualified } from './models/leads-qualified.model';
import { SequelizeModule } from '@nestjs/sequelize';

export const leadsProviders = [
  {
    provide: 'LEAD_CLOSED_REPOSITORY',
    useValue: LeadClosed,
  },
  {
    provide: 'LEAD_QUALIFIED_REPOSITORY',
    useValue: LeadQualified,
  },
];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'db/leads.sqlite',
      synchronize: true,
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([LeadClosed, LeadQualified]),
  ],
  controllers: [LeadsMsController],
  providers: [LeadsMsService, ...leadsProviders],
  exports: [LeadsMsService, ...leadsProviders],
})
export class LeadsMsModule {}
