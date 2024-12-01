import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { DeckSchema } from './deck.schema';
import { DeckCompletoService } from './deckcompleto.service';
import { DeckImportWorkerService } from './deck_importer';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Deck', schema: DeckSchema }]),
    HttpModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379, 
      },
    }),
    BullModule.registerQueue({
      name: 'deck_import_queue', 
    }),
  ],
  providers: [DeckCompletoService, DeckImportWorkerService],
})
export class DeckCompletoModule {}
