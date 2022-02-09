import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRouteSnapshot } from "@angular/router";
import { filter } from "rxjs";
import { environment as env } from '../../../../environments/environment';

@Injectable()
export class TitleService {
    constructor(private title: Title) { }

    setTitle(
        snapshot: ActivatedRouteSnapshot
    ) {
        let lastChild = snapshot;
        while (lastChild.children.length) {
            lastChild = lastChild.children[0];
        }
        const { title } = lastChild.data;
        const translate: any = null;
        if (title) {
            translate
                .get(title)
                .pipe(filter((translatedTitle) => translatedTitle !== title))
                .subscribe((translatedTitle: string) =>
                    this.title.setTitle(`${translatedTitle} - ${env.appName}`)
                );
        } else {
            this.title.setTitle(env.appName);
        }
    }
}