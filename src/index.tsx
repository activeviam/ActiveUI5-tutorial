import {
  DataVisualizationQueryEditor, drawerQueryEditor,
  ExtensionModule,
  pluginWidgetPivotTable,
} from "@activeviam/activeui-sdk";
import { withSandboxClients } from "@activeviam/sandbox-clients";
import _merge from "lodash/merge";
import { plugins } from "./plugins";
import customTheme from './themes/custom-theme.json';

const extension: ExtensionModule = {
  activate: async (configuration) => {
    _merge(configuration.pluginRegistry, plugins);
    configuration.applicationName = "ActiveUI";
    configuration.themes = {
      "custom-theme": customTheme
    };
    configuration.initialDashboardPageState = {
      content: { "0": pluginWidgetPivotTable.initialState },
      layout: {
        children: [
          {
            leafKey: "0",
            size: 1,
          },
        ],
        direction: "row",
      },
    };
    configuration.drawers = configuration.drawers.concat(drawerQueryEditor);
    configuration.higherOrderComponents = [withSandboxClients];
  },
};

export default extension;
