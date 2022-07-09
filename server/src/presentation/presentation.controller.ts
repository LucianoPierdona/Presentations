import { Body, Controller, Post } from '@nestjs/common';
import { CreatePresentationReqDto } from './dto/create-presentation-req.dto';
import { PresentationResDto } from './dto/presentation-res.dto';
import { PresentationService } from './presentation.service';

@Controller('presentation')
export class PresentationController {
  constructor(private presentationService: PresentationService) {}

  @Post()
  async create(
    @Body() body: CreatePresentationReqDto,
  ): Promise<PresentationResDto> {
    return this.presentationService.create(body);
  }
}
