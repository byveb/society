import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { PageModule } from "@pages/page.module";
import { DefaultEffects } from "@app/store/effects";
import { environment } from "environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { metaReducers, ROOT_REDUCERS } from "@app/store/reducers";
import { LandlordRoutingModule } from "./landlord-routing.module";
import { RouterState, StoreRouterConnectingModule } from "@ngrx/router-store";

@NgModule({
  declarations: [

  ],
  imports: [
    PageModule,
    LandlordRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument({ name: "society", maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([DefaultEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    })
  ],
  exports: [
    LandlordRoutingModule,
  ],
  providers: [],
})
export class LandlordModule {

}