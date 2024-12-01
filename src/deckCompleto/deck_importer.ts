import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';

@Processor('deck_import_queue') 
@Injectable()
export class DeckImportWorkerService {

  @Process('deck_import_task')
  async handleDeckImport(job: Job) {
    const deckData = job.data; 
    return { status: 'success', data: deckData };
  }
}
