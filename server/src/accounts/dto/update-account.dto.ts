import {
  IsOptional,
  IsString,
  IsInt,
  MinLength,
  IsEmail,
  MaxLength,
} from 'class-validator';
export class UpdateAccountDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(6)
  @MaxLength(20)
  password?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  postal_code?: string;

  @IsOptional()
  @IsString()
  profile_picture?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  document_type?: string;

  @IsOptional()
  @IsInt()
  document_number?: number;

  @IsOptional()
  @IsInt()
  phone_number?: number;

  @IsOptional()
  @IsString()
  first_name?: string;

  @IsOptional()
  @IsString()
  last_name?: string;

}
