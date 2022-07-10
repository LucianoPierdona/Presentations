import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePresentationReqDto } from './dto/create-presentation-req.dto';
import { PresentationResDto } from './dto/presentation-res.dto';
import { PresentationService } from './presentation.service';

@Controller('presentation')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('presentation')
export class PresentationController {
  constructor(private presentationService: PresentationService) {}

  @Post()
  @ApiBody({ type: CreatePresentationReqDto })
  @ApiResponse({
    description: 'return created presentation',
    status: 201,
  })
  async create(
    @Body() body: CreatePresentationReqDto,
  ): Promise<PresentationResDto> {
    const presentation = await this.presentationService.create(body);

    return new PresentationResDto(presentation);
  }

  @Get()
  @ApiResponse({
    description: 'return all presentations',
    status: 200,
  })
  async list(): Promise<PresentationResDto[]> {
    const presentations = await this.presentationService.list();

    return presentations.map(
      (presentation) => new PresentationResDto(presentation),
    );
  }

  @Put(':presentationId/attendees/:attendeeId')
  @ApiResponse({
    description: 'return presentation with attendees',
    status: 201,
  })
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
