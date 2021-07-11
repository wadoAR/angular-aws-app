import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employee/employee';
import {EmployeesService} from '../service/employees.service';
import {Data} from '../../shared/models/data';
import {LabelValueService} from '../../utils/label-value.service';
import {LabelValue} from '../../models/utility/label-value';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    employees: Employee[];
    loading = true;
    statuses = Data.statuses;
    isDepartmentPermission: boolean;
    displayDialog = false;
    dialogTitle: string;
    roles: LabelValue[];

    constructor(private employeesService: EmployeesService,
                private labelValueService: LabelValueService) {
    }

    ngOnInit(): void {
        this.getEmployees();
        this.getRoles();
    }

    addEmployee() {
        this.dialogTitle = 'Add employee';
        this.displayDialog = true;
    }

    private getEmployees() {
        this.employeesService.getEmployees().subscribe(res => {
            this.employees = res;
            this.employees.forEach(employee => {
                employee.startDate = new Date(employee.startDate);
                employee.createdDate = new Date(employee.createdDate);
            });

            this.loading = false;
        });
    }

    editEmployee() {
        this.dialogTitle = 'Edit employee';
        this.displayDialog = true;
    }

    private getRoles() {
        this.labelValueService.getRoles().subscribe(res => {
            this.roles = res;
        });
    }
}
