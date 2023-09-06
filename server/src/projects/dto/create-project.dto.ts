import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsBoolean,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreateProjectDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  goal_currency?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  goal_amount?: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  category_id?: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  goal_completed?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  end_of_fundraiser?: Date;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  total_funding?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  image?: string;
}
