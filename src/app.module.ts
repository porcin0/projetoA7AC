import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoAguaModule } from './consumo_agua/consumo_agua.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://porcin0:aL210808@clusterporcin0.w1vx7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPorcin0'),
    ConsumoAguaModule,
  ],
})
export class AppModule {}
