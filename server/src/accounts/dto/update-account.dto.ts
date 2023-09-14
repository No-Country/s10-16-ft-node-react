import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsInt,
  MinLength,
  IsEmail,
  MaxLength,
} from 'class-validator';
export class UpdateAccountDto {
  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsOptional()
  @MinLength(6)
  @MaxLength(20)
  password?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  postal_code?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  profile_picture?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  country?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  document_type?: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  document_number?: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  phone_number?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  first_name?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  last_name?: string;

}
