import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/service.prisma';

@Injectable()
export class ProjectsService {
  constructor(private readonly prismaService: PrismaService) { }

  private async getAccount(email: string) {
    const findAccount = await this.prismaService.accounts.findUnique({
      where: { email },
    });
    return findAccount;
  }
  async create(email: string, createProjectDto: CreateProjectDto) {
    const currentAccount = await this.getAccount(email);
    const newProject = await this.prismaService.projects.create({
      data: {
        ...createProjectDto,
        is_active: true,
        accounts: {
          connect: {
            id: currentAccount.id,
          },
        },
      },
    });
    return newProject;
  }

  async findAll() {
    const allProjects = await this.prismaService.projects.findMany({
      take: 30,
    });
    return allProjects;
  }

  async findOne(id: string) {
    const foundProject = await this.prismaService.projects.findUnique({
      where: { id },
      include: {
        accounts: true,
      },
    });
    return foundProject;
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    const updatedProject = this.prismaService.projects.update({
      where: { id },
      data: {
        ...updateProjectDto,
      },
    });

    return updatedProject;
  }

  async remove(id: string) {
    const deletedProject = await this.prismaService.projects.update({
      where: { id },
      data: {
        is_active: false,
      },
    });
    return deletedProject;
  }
}
