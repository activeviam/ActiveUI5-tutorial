/**
 * Created by Clement Caylux on 28/06/2022
 */

import {WidgetPlugin} from "@activeviam/activeui-sdk";
import {Map} from './Map'
import {IconMap} from "./IconMap";

const widgetKey = `Map`;

export const pluginWidgetMap: WidgetPlugin = {
    Component: Map,
    Icon: IconMap,
    initialState: {
        widgetKey,
    },
    key: widgetKey,
    translations: {
        "en-US": {
            key: "Map",
            defaultName: "New map"
        }
    }
};