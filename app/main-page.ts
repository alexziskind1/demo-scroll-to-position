import { EventData } from "tns-core-modules/data/observable";
import { Page, View } from "tns-core-modules/ui/page";

import { ScrollView } from 'tns-core-modules/ui/scroll-view';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';

let page: Page = null;
let scrollLayout: ScrollView = null;
let contentContainer: StackLayout = null;

const numLabels = 50;

export function navigatingTo(args: EventData) {
    page = <Page>args.object;

    scrollLayout = page.getViewById('myScroller') as ScrollView;
    contentContainer = page.getViewById('contentContainer') as StackLayout;

    for (var i = 1; i <= numLabels; i++) {
        const lbl = new Label();
        lbl.id = 'lbl' + i;
        lbl.className = 'my-lbl';
        lbl.text = i.toString();

        contentContainer.addChild(lbl);
    }
}

export function scrollToId() {
    const base = page.getViewById('lbl1') as Label;
    const target = page.getViewById('lbl45') as Label;
    scrollLayout.scrollToHorizontalOffset(target.getLocationRelativeTo(base).x, true);
}

export function scrollToEnd() {
    scrollLayout.scrollToHorizontalOffset(scrollLayout.scrollableWidth, true);
}

export function scrollToMiddle() {
    scrollLayout.scrollToHorizontalOffset(scrollLayout.scrollableWidth / 2, true);
}

export function scrollToStart() {
    scrollLayout.scrollToHorizontalOffset(0, true);
}
