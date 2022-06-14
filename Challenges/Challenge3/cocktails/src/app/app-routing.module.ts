import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavouriteCocktailsComponent } from "./fav/components/favourite-cocktails/favourite-cocktails.component";
import { HeroComponent } from "./home/components/hero/hero.component";
import { ListComponent } from "./home/components/list/list.component";

const routes: Routes = [
    {path: '', component: ListComponent},
    {path: 'hero', component: HeroComponent},
    {path: 'favorites', component: FavouriteCocktailsComponent},
    {path: '**', redirectTo: ''}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}