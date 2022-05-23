import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './paginas/login/login.component';
import { ConsultarProductosComponent } from './paginas/consultar-productos/consultar-productos.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConsultarVentasAlmacenComponent } from './paginas/consultar-ventas-almacen/consultar-ventas-almacen.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { RegistroVentaComponent } from './paginas/registro-venta/registro-venta.component';
import { RegistrarProductosComponent } from './paginas/registro-producto/registro-producto.component';
import { RegistroTurnoComponent } from './paginas/registro-turno/registro-turno.component';
import { RegistroClienteComponent } from './paginas/registro-cliente/registro-cliente.component';
import { ImagenComponent } from './paginas/imagen/imagen.component';

const appRouts:Routes=[
  {path:'', component:LoginComponent},
  {path:'productos', component:ConsultarProductosComponent},
  {path:'contactanos', component:ContactanosComponent},
  {path:'ventas-almacen', component:ConsultarVentasAlmacenComponent},
  {path:'registrar-venta', component:RegistroVentaComponent},
  {path:'registrar-producto', component:RegistrarProductosComponent},
  {path:'registrar-turno', component:RegistroTurnoComponent},
  {path:'registro-cliente', component:RegistroClienteComponent},
  {path:'inicio', component:AppComponent},
  {path:'home', component:AppComponent}
];

@NgModule({
  declarations: [
    AppComponent, MenuComponent, HeaderComponent, FooterComponent, LoginComponent, ConsultarProductosComponent, ConsultarVentasAlmacenComponent, ContactanosComponent, ImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
