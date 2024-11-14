import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ConsumoAguaService } from './consumo_agua.service';
import { ConsumoAgua } from './consumo_agua.model';

@Controller('consumo_agua')
export class ConsumoAguaController {
  constructor(private readonly consumoAguaService: ConsumoAguaService) {}

  @Post()
  async registrarConsumo(@Body() consumoData: { usuarioId: string; quantidade: number; dataLeitura: Date }): Promise<ConsumoAgua> {
    return this.consumoAguaService.registrarConsumo(consumoData);
  }

  @Get('historico')
  async consultarHistorico(
    @Query('usuarioId') usuarioId: string,
    @Query('dataInicial') dataInicial: string,
    @Query('dataFinal') dataFinal: string,
  ): Promise<ConsumoAgua[]> {
    return this.consumoAguaService.consultarHistorico(usuarioId, new Date(dataInicial), new Date(dataFinal));
  }
}
