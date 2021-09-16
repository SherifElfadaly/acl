import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatPermissionDto } from './dto/create-permission.dto';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionsService {
    constructor(
        @InjectRepository(Permission)
        private permissionRepository: Repository<Permission>,
    ) { }

    create(createPermissionDto: CreatPermissionDto): Promise<Permission> {
        const role = this.permissionRepository.create(createPermissionDto);
        return this.permissionRepository.save(role);
    }
}
