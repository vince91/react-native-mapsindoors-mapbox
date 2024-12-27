"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const createFragment = (viewId, camera, showCompass) => {
    let command = react_native_1.UIManager.MapsIndoorsView.Commands.create;
    if (react_native_1.Platform.OS === 'android') {
        command = command.toString();
    }
    react_native_1.UIManager.dispatchViewManagerCommand(viewId, command, [viewId, JSON.stringify(camera), showCompass]);
};
const MapView = ({ style, camera, showCompass }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const viewId = (0, react_native_1.findNodeHandle)(ref.current);
        createFragment(viewId, camera, showCompass !== undefined ? showCompass : true);
    }, []);
    return (React.createElement(MapsIndoorsViewManager, { style: style, ref: ref, camera: camera, showCompass: showCompass }));
};
const MapsIndoorsViewManager = (0, react_native_1.requireNativeComponent)('MapsIndoorsView');
exports.default = MapView;
//# sourceMappingURL=MapView.js.map