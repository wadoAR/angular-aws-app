export class Employee {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
    startDate: Date;
    roleId: number;
    role: string;
    status: string;
    createdDate: Date;
    departmentPermissionIds: number[];
    departmentPermissions: string[];
    devicePermissionIds: number[];
    devicePermissions: string[];
    softwarePermissionIds: number[];
    softwarePermissions: string[];
    toolPermissionIds: number[];
    toolPermissions: string[];
}
