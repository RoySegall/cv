import {ComponentType, Fragment} from "react";
import {Spacer} from "../Spacer";

type ItemsWithSpacerProps<T> = {
    items: T[];
    component: ComponentType<T>
};

export function ItemsWithSpacer<T extends Record<string, unknown>>({items, component: Component}: ItemsWithSpacerProps<T>) {
    return items.map((props, i) => <Fragment key={i}>
        <Component {...props} />
        {i < items.length - 1 && <Spacer />}
    </Fragment>)
}
