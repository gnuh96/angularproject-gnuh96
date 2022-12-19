import {RouterModule, Routes} from '@angular/router';
import {TicketListComponent} from './tickets';
import {StudentListComponent} from './students/student-list/student-list.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'tickets', component: TicketListComponent},
  {path: 'students', component: StudentListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
