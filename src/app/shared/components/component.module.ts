import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { NoteComponent } from './note/note.component';
import { PetsComponent } from './pets/pets.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact.component';
import { SlidebarComponent } from './slidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ThirdPartyComponentsModule } from './third-party-components.module';
import { UploadFilePreviewComponent } from './upload-file-preview/upload-file-preview.component';
import { GridStackComponent, LoaderComponent } from '.';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    CardComponent,
    NavComponent,
    NoteComponent,
    PetsComponent,
    ModalComponent,
    LoaderComponent,
    FilterComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    AddressComponent,
    ContactComponent,
    VehicleComponent,
    SlidebarComponent,
    GridStackComponent,
    FileUploadComponent,
    BreadcrumbComponent,
    UploadFilePreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThirdPartyComponentsModule
  ],
  exports: [
    MenuComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    SlidebarComponent,
    GridStackComponent,
    BreadcrumbComponent,
    ThirdPartyComponentsModule
  ]
})
export class ComponentsModule { }
