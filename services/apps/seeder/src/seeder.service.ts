import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class SeederService {
  private readonly logger = new Logger(SeederService.name);

  constructor(
    @InjectConnection('source_db')
    private sourceConnection: Sequelize,
    @InjectModel(Customer)
    private customerRepository: typeof Customer,
    @InjectModel(Product)
    private productRepository: typeof Product,
    @InjectModel(ProductCategoryNameTranslation)
    private productCategoryNameTranslationRepository: typeof ProductCategoryNameTranslation,
    @InjectModel(Review)
    private reviewRepository: typeof Review,
    @InjectModel(Order)
    private orderRepository: typeof Order,
    @InjectModel(OrderItem)
    private orderItemRepository: typeof OrderItem,
    @InjectModel(Payment)
    private paymentRepository: typeof Payment,
    @InjectModel(LeadQualified)
    private leadQualifiedRepository: typeof LeadQualified,
    @InjectModel(LeadClosed)
    private leadClosedRepository: typeof LeadClosed,
    @InjectModel(Seller)
    private sellerRepository: typeof Seller,
    @InjectModel(GeoLocation)
    private geoLocationRepository: typeof GeoLocation,
  ) {}
}
