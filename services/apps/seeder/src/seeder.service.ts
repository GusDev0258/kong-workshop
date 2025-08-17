import { Injectable, Logger, Inject } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Customer } from 'apps/customer-ms/src/models/customer.model';
import { GeoLocation } from 'apps/geolocation-ms/src/models/geo-location.model';
import { LeadClosed } from 'apps/leads-ms/src/models/leads-closed.model';
import { LeadQualified } from 'apps/leads-ms/src/models/leads-qualified.model';
import { OrderItem } from 'apps/orders-ms/src/models/order-item.model';
import { Order } from 'apps/orders-ms/src/models/order.model';
import { OrderPayment } from 'apps/payment-ms/src/models/order-payment.model';
import { ProductCategoryNameTranslation } from 'apps/product-ms/src/models/product-category-name-translation.model';
import { Product } from 'apps/product-ms/src/models/product.model';
import { OrderReview } from 'apps/reviews-ms/src/models/order-review.model';
import { Sellers } from 'apps/seller-ms/src/models/sellers.model';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class SeederService {
  private readonly logger = new Logger(SeederService.name);

  constructor(
    @InjectConnection('source_db')
    private sourceConnection: Sequelize,
    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: typeof Customer,
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: typeof Product,
    @Inject('PRODUCT_CATEGORY_NAME_REPOSITORY')
    private productCategoryNameTranslationRepository: typeof ProductCategoryNameTranslation,
    @Inject('ORDER_REVIEWS_REPOSITORY')
    private reviewRepository: typeof OrderReview,
    @Inject('ORDERS_REPOSITORY')
    private orderRepository: typeof Order,
    @Inject('ORDERS_ITEMS_REPOSITORY')
    private orderItemRepository: typeof OrderItem,
    @Inject('ORDER_PAYMENTS_REPOSITORY')
    private paymentRepository: typeof OrderPayment,
    @Inject('LEAD_QUALIFIED_REPOSITORY')
    private leadQualifiedRepository: typeof LeadQualified,
    @Inject('LEAD_CLOSED_REPOSITORY')
    private leadClosedRepository: typeof LeadClosed,
    @Inject('SELLER_REPOSITORY')
    private sellerRepository: typeof Sellers,
    @Inject('GEO_LOCATION_REPOSITORY')
    private geoLocationRepository: typeof GeoLocation,
  ) {}
}
