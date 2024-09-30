import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { OrderModule } from './modules/order/order.module';
import { CategoryModule } from './modules/category/category.module';
import { UserAddressModule } from './modules/user-address/user-address.module';
import { CartModule } from './modules/cart/cart.module';

@Module({
  imports: [ProductModule, UserModule, OrderModule, CategoryModule, UserAddressModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
