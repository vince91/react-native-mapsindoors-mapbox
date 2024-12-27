import * as React from 'react';
import MPCameraPosition from './MPCameraPosition';
declare const MapView: ({ style, camera, showCompass }: {
    style: any;
    camera?: MPCameraPosition;
    showCompass?: boolean;
}) => React.JSX.Element;
export default MapView;
