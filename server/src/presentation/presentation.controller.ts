import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePresentationReqDto } from './dto/create-presentation-req.dto';
import { PresentationResDto } from './dto/presentation-res.dto';
import { PresentationService } from './presentation.service';

@Controller('presentation')
@UseInterceptors(ClassSerializerInterceptor)
export class PresentationController {
  constructor(private presentationService: PresentationService) {}

  @Post()
  async create(
    @Body() body: CreatePresentationReqDto,
  ): Promise<PresentationResDto> {
    const presentation = await this.presentationService.create(body);

    return new PresentationResDto(presentation);
  }

  @Put(':presentationId/attendees/:attendeeId')
  async addAttendeeToPresentation(
    @Param('presentationId') presentationId: number,
    @Param('attendeeId') attendeeId: number,
  ): Promise<PresentationResDto> {
    const presentation =
      await this.presentationService.addAttendeeToPresentation({
        presentationId,
        attendeeId,
      });

    return new PresentationResDto(presentation);
  }
}
