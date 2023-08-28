import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, IsBoolean, IsInt, MinLength, IsEmail, MaxLength, IsEnum } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';


enum AccountType {
  PERSONAL = 'PERSONAL',
  COMPANY = 'COMPANY',
}

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
  @IsEmail()
  email: string;

  @MinLength(6)
  @MaxLength(20)
  password: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsEnum(AccountType)
  type: AccountType;

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

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsOptional()
  @IsBoolean()
  verified: boolean;

  @IsOptional()
  @IsBoolean()
  is_active: boolean;
}
