import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConsumoAgua } from './consumo_agua.model';

@Injectable()
export class ConsumoAguaService {
  constructor(@InjectModel(ConsumoAgua.name) private consumoAguaModel: Model<ConsumoAgua>) {}

  async registrarConsumo(consumoData: { usuarioId: string; quantidade: number; dataLeitura: Date }): Promise<ConsumoAgua> {
    const novoConsumo = new this.consumoAguaModel(consumoData);
    return novoConsumo.save();
  }
  async consultarHistorico(usuarioId: string, dataInicial: Date, dataFinal: Date): Promise<ConsumoAgua[]> {
    return this.consumoAguaModel.find({
      usuarioId,
      dataLeitura: { $gte: dataInicial, $lte: dataFinal },
    }).exec();
  }
}



