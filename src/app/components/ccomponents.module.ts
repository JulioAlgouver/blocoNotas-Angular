import { NgModule } from "@angular/core";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { BtnMenuComponent } from "./btn-menu/btn-menu.component";
import { TextboxAreaComponent } from "./textbox-area/textbox-area.component";
import { MatSelect } from "@angular/material/select";

import { MatFormField, MatLabel } from "@angular/material/form-field";
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    declarations: [
        TopMenuComponent,
        BtnMenuComponent,
        TextboxAreaComponent
    ],
    imports: [MatSelect, MatFormField, MatLabel,MatMenuModule],
    exports:[        
        TopMenuComponent,
        BtnMenuComponent,
        TextboxAreaComponent]
})

export class ComponentsModule{
    
}