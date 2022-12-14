import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { ProgressComponent } from "./progress/progress.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        ProgressComponent,
        Grafica1Component,
        DashboardComponent,
        PagesComponent
    ],
    exports: [
        ProgressComponent,
        Grafica1Component,
        DashboardComponent,
        PagesComponent
    ],
    imports: [CommonModule, SharedModule, RouterModule]
})
export class PagesModule {}
