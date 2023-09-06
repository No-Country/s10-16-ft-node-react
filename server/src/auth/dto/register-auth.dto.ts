import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, IsBoolean, IsInt, MinLength, IsEmail, MaxLength, IsEnum } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';
import { ApiProperty } from '@nestjs/swagger';


enum AccountType {
  PERSONAL = 'PERSONAL',
  COMPANY = 'COMPANY',
}

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty()
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

  @ApiProperty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsString()
  last_name: string;

  @IsOptional()
  @IsBoolean()
  verified: boolean;

  @IsOptional()
  @IsBoolean()
  is_active: boolean;

}
