import { Body, Controller, Post } from '@nestjs/common';
import { CreatePresentationReqDto } from './dto/create-presentation-req.dto';
import { PresentationService } from './presentation.service';

@Controller('presentation')
export class PresentationController {
  constructor(private presentationService: PresentationService) {}

  @Post()
  async create(@Body() body: CreatePresentationReqDto) {
    return this.presentationService.create(body);
  }
}
