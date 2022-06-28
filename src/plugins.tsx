import _keyBy from "lodash/keyBy";
import {
  CellPlugin,
  CellStylePlugin,
  MenuItemPlugin,
  PluginRegistry,
  TitleBarButtonPlugin,
  WidgetPlugin,
  pluginCellPivotTable,
  pluginCellStyleDrillthroughTable,
  pluginCellStylePivotTable,
  pluginCellStyleTable,
  pluginCellTable,
  pluginCellTreeTable,
  pluginMenuItemCopyQuery,
  pluginMenuItemDuplicateWidget,
  pluginMenuItemExportToCsv,
  pluginMenuItemExportDrillthroughToCsv,
  pluginMenuItemFilterOnEverythingButSelection,
  pluginMenuItemFilterOnSelection,
  pluginMenuItemFullScreen,
  pluginMenuItemShowHideTotals,
  pluginMenuItemOpenDrillthrough,
  pluginMenuItemRefreshQuery,
  pluginMenuItemRemoveSort,
  pluginMenuItemRemoveWidget,
  pluginMenuItemSaveWidget,
  pluginMenuItemSortChartAscendingly,
  pluginMenuItemSortChartDescendingly,
  pluginMenuItemSortDrillthroughTableAscendingly,
  pluginMenuItemSortDrillthroughTableDescendingly,
  pluginMenuItemSortPivotTableAscendingly,
  pluginMenuItemSortPivotTableDescendingly,
  pluginMenuItemSortTableAscendingly,
  pluginMenuItemSortTableDescendingly,
  pluginMenuItemSwitchQuickFilterMode,
  pluginMenuItemSynchronizeSavedWidget,
  pluginTitleBarButtonFullScreen,
  pluginTitleBarButtonRemoveWidget,
  pluginTitleBarButtonToggleQueryMode,
  pluginWidgetDrillthroughTable,
  pluginWidgetKpi,
  pluginWidgetPivotTable,
  pluginWidgetPlotly100StackedAreaChart,
  pluginWidgetPlotly100StackedBarChart,
  pluginWidgetPlotly100StackedColumnChart,
  pluginWidgetPlotlyAreaChart,
  pluginWidgetPlotlyBulletChart,
  pluginWidgetPlotlyClusteredBarChart,
  pluginWidgetPlotlyClusteredColumnChart,
  pluginWidgetPlotlyComboChart,
  pluginWidgetPlotlyDonutChart,
  pluginWidgetPlotlyGaugeChart,
  pluginWidgetPlotlyLineChart,
  pluginWidgetPlotlyPieChart,
  pluginWidgetPlotlyRadarChart,
  pluginWidgetPlotlyScatterPlot,
  pluginWidgetPlotlyStackedAreaChart,
  pluginWidgetPlotlyStackedBarChart,
  pluginWidgetPlotlyStackedColumnChart,
  pluginWidgetPlotlyTreeMap,
  pluginWidgetPlotlyWaterfallChart,
  pluginWidgetQuickFilter,
  pluginWidgetTable,
  pluginWidgetTreeTable,
} from "@activeviam/activeui-sdk";
import {pluginWidgetMap} from "./custom/Map/pluginWidgetMap";

const cellPlugins: Array<CellPlugin<any>> = [
  pluginCellTable,
  pluginCellPivotTable,
  pluginCellTreeTable,
];

const cellStylePlugins: Array<CellStylePlugin<any>> = [
  pluginCellStyleTable,
  pluginCellStylePivotTable,
  pluginCellStyleDrillthroughTable,
];

const menuItemPlugins: Array<MenuItemPlugin<any, any>> = [
  pluginMenuItemDuplicateWidget,
  pluginMenuItemFullScreen,
  pluginMenuItemFilterOnEverythingButSelection,
  pluginMenuItemFilterOnSelection,
  pluginMenuItemRemoveWidget,
  pluginMenuItemCopyQuery,
  pluginMenuItemRefreshQuery,
  pluginMenuItemExportToCsv,
  pluginMenuItemExportDrillthroughToCsv,
  pluginMenuItemShowHideTotals,
  pluginMenuItemOpenDrillthrough,
  pluginMenuItemRemoveSort,
  pluginMenuItemSortChartAscendingly,
  pluginMenuItemSortChartDescendingly,
  pluginMenuItemSortDrillthroughTableAscendingly,
  pluginMenuItemSortDrillthroughTableDescendingly,
  pluginMenuItemSortPivotTableAscendingly,
  pluginMenuItemSortPivotTableDescendingly,
  pluginMenuItemSortTableAscendingly,
  pluginMenuItemSortTableDescendingly,
  pluginMenuItemSwitchQuickFilterMode,
  pluginMenuItemSynchronizeSavedWidget,
  pluginMenuItemSaveWidget,
];

const titleBarButtonPlugins: Array<TitleBarButtonPlugin<any>> = [
  pluginTitleBarButtonFullScreen,
  pluginTitleBarButtonRemoveWidget,
  pluginTitleBarButtonToggleQueryMode,
];

// Order matters: it controls the order of the icons in the widget ribbons.
const widgetPlugins: Array<WidgetPlugin<any, any>> = [
  pluginWidgetMap,
  pluginWidgetPivotTable,
  pluginWidgetTreeTable,
  pluginWidgetTable,
  pluginWidgetKpi,
  pluginWidgetPlotlyLineChart,
  pluginWidgetPlotlyAreaChart,
  pluginWidgetPlotlyStackedAreaChart,
  pluginWidgetPlotly100StackedAreaChart,
  pluginWidgetPlotlyStackedColumnChart,
  pluginWidgetPlotlyClusteredColumnChart,
  pluginWidgetPlotly100StackedColumnChart,
  pluginWidgetPlotlyComboChart,
  pluginWidgetPlotlyStackedBarChart,
  pluginWidgetPlotlyClusteredBarChart,
  pluginWidgetPlotly100StackedBarChart,
  pluginWidgetPlotlyPieChart,
  pluginWidgetPlotlyDonutChart,
  pluginWidgetPlotlyScatterPlot,
  pluginWidgetPlotlyRadarChart,
  pluginWidgetPlotlyWaterfallChart,
  pluginWidgetPlotlyBulletChart,
  pluginWidgetPlotlyGaugeChart,
  pluginWidgetPlotlyTreeMap,
  pluginWidgetQuickFilter,
  pluginWidgetDrillthroughTable,
];

const plotlyWidgetPlugins = widgetPlugins.filter(({ key }) =>
  key.startsWith("plotly"),
);

plotlyWidgetPlugins.forEach((widgetPlugin) => {
  widgetPlugin.menuItems = [
    pluginMenuItemRemoveWidget.key,
    pluginMenuItemDuplicateWidget.key,
    pluginMenuItemSynchronizeSavedWidget.key,
    pluginMenuItemSaveWidget.key,
    "save-as",
  ];
  widgetPlugin.titleBarButtons = [
    pluginTitleBarButtonFullScreen.key,
    pluginTitleBarButtonToggleQueryMode.key,
  ];
  widgetPlugin.contextMenuItems = [
    pluginMenuItemFilterOnEverythingButSelection.key,
    pluginMenuItemFilterOnSelection.key,
    pluginMenuItemOpenDrillthrough.key,
    pluginMenuItemSortChartAscendingly.key,
    pluginMenuItemSortChartDescendingly.key,
    pluginMenuItemRemoveSort.key,
    pluginMenuItemCopyQuery.key,
    pluginMenuItemRefreshQuery.key,
    pluginMenuItemExportToCsv.key,
  ];
});

pluginWidgetTable.cell = pluginCellTable.key;
pluginWidgetTable.cellStyle = pluginCellStyleTable.key;

pluginWidgetPivotTable.cell = pluginCellPivotTable.key;
pluginWidgetPivotTable.cellStyle = pluginCellStyleTable.key;

pluginWidgetTreeTable.cell = pluginCellTreeTable.key;
pluginWidgetTreeTable.cellStyle = pluginCellStylePivotTable.key;

[pluginWidgetPivotTable, pluginWidgetTreeTable, pluginWidgetTable].forEach(
  (tableWidget) => {
    tableWidget.menuItems = [
      pluginMenuItemRemoveWidget.key,
      pluginMenuItemDuplicateWidget.key,
      pluginMenuItemSynchronizeSavedWidget.key,
      pluginMenuItemSaveWidget.key,
      "save-as",
    ];
    tableWidget.titleBarButtons = [
      pluginTitleBarButtonFullScreen.key,
      pluginTitleBarButtonToggleQueryMode.key,
    ];
  },
);

const contextMenuItemsForTables =  [
    pluginMenuItemFilterOnEverythingButSelection.key,
    pluginMenuItemFilterOnSelection.key,
    pluginMenuItemOpenDrillthrough.key,
    pluginMenuItemRemoveSort.key,
    pluginMenuItemCopyQuery.key,
    pluginMenuItemShowHideTotals.key,
    pluginMenuItemRefreshQuery.key,
    pluginMenuItemExportToCsv.key,
];

// Pivot Tables and Tree Tables have a non-breaking sort
[pluginWidgetPivotTable, pluginWidgetTreeTable].forEach((tableWidget) => {
  tableWidget.contextMenuItems = [
    pluginMenuItemSortPivotTableAscendingly.key,
    pluginMenuItemSortPivotTableDescendingly.key,
    ...contextMenuItemsForTables,
  ];
});

// Tables have a breaking sort
pluginWidgetTable.contextMenuItems = [
  pluginMenuItemSortTableAscendingly.key,
  pluginMenuItemSortTableDescendingly.key,
  ...contextMenuItemsForTables,
];

pluginWidgetDrillthroughTable.menuItems = [
  pluginMenuItemRemoveWidget.key,
  pluginMenuItemDuplicateWidget.key,
  pluginMenuItemSynchronizeSavedWidget.key,
  pluginMenuItemSaveWidget.key,
  "save-as",
];
pluginWidgetDrillthroughTable.titleBarButtons = [
  pluginTitleBarButtonFullScreen.key,
  pluginTitleBarButtonToggleQueryMode.key,
];
pluginWidgetDrillthroughTable.contextMenuItems = [
  pluginMenuItemSortDrillthroughTableAscendingly.key,
  pluginMenuItemSortDrillthroughTableDescendingly.key,
  pluginMenuItemExportDrillthroughToCsv.key,
];
pluginWidgetDrillthroughTable.cellStyle = pluginCellStyleDrillthroughTable.key;

pluginWidgetKpi.menuItems = [
  pluginMenuItemRemoveWidget.key,
  pluginMenuItemDuplicateWidget.key,
  pluginMenuItemSynchronizeSavedWidget.key,
  pluginMenuItemSaveWidget.key,
  "save-as",
];
pluginWidgetKpi.titleBarButtons = [
  pluginTitleBarButtonFullScreen.key,
  pluginTitleBarButtonToggleQueryMode.key,
];
pluginWidgetKpi.contextMenuItems = [
  pluginMenuItemCopyQuery.key,
  pluginMenuItemRefreshQuery.key,
  pluginMenuItemExportToCsv.key,
  pluginMenuItemShowHideTotals.key,
  pluginMenuItemFilterOnSelection.key,
  pluginMenuItemFilterOnEverythingButSelection.key,
  pluginMenuItemOpenDrillthrough.key,
];

pluginWidgetQuickFilter.menuItems = [
  pluginMenuItemRemoveWidget.key,
  pluginMenuItemSwitchQuickFilterMode.key,
];
pluginWidgetQuickFilter.titleBarButtons = [pluginTitleBarButtonFullScreen.key];
pluginWidgetQuickFilter.contextMenuItems = [];

export const plugins: PluginRegistry = {
  cell: _keyBy(cellPlugins, "key"),
  "cell-style": _keyBy(cellStylePlugins, "key"),
  "selection-listener": _keyBy([], "key"),
  "menu-item": _keyBy(menuItemPlugins, "key"),
  "titlebar-button": _keyBy(titleBarButtonPlugins, "key"),
  widget: _keyBy(widgetPlugins, "key"),
};
