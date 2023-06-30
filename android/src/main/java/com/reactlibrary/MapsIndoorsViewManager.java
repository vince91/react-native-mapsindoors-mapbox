package com.reactlibrary;

import android.view.Choreographer;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.mapbox.maps.MapView;
import com.mapsindoors.core.OnResultReadyListener;

import java.util.Map;

public class MapsIndoorsViewManager extends ViewGroupManager<MapView> {
    public static final String REACT_CLASS = "MapsIndoorsView";
    public final int COMMAND_CREATE = 1;

    private int propWidth;
    private int propHeight;

    private MapView view;

    ReactApplicationContext mReactContext;
    OnResultReadyListener mOnMapReadyCallback;

    public MapsIndoorsViewManager(ReactApplicationContext reactContext, OnResultReadyListener onMapReadyCallback) {
        mReactContext = reactContext;
        mOnMapReadyCallback = onMapReadyCallback;
    }

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected MapView createViewInstance(@NonNull ThemedReactContext reactContext) {
        view = new MapView(reactContext);
        return view;
    }

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of("create", COMMAND_CREATE);
    }

    @Override
    public void receiveCommand(@NonNull MapView root, String commandId, @Nullable ReadableArray args) {
        super.receiveCommand(root, commandId, args);
        assert args != null;
        int reactNativeViewId = args.getInt(0);
        int commandIdInt = Integer.parseInt(commandId);

        if (commandIdInt == COMMAND_CREATE) {
            createMapFragment(root, reactNativeViewId);
        }
    }

    public void createMapFragment(FrameLayout root, int reactNativeViewId) {
        ViewGroup parentView = root.findViewById(reactNativeViewId);
        setupLayout(parentView);
        mOnMapReadyCallback.onResultReady(null);
    }

    @ReactPropGroup(names = {"width", "height"}, customType = "Style")
    public void setStyle(FrameLayout view, int index, Integer value) {
        if (index == 0) {
            propWidth = value;
        }

        if (index == 1) {
            propHeight = value;
        }
    }

    public void setupLayout(View view) {
        Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() {
            @Override
            public void doFrame(long frameTimeNanos) {
                manuallyLayoutChildren(view);
                view.getViewTreeObserver().dispatchOnGlobalLayout();
                Choreographer.getInstance().postFrameCallback(this);
            }
        });
    }

    /**
     * Layout all children properly
     */
    public void manuallyLayoutChildren(View view) {

        float density = mReactContext.getResources().getDisplayMetrics().density;

        // propWidth and propHeight coming from react-native props
        int width = (int)(propWidth * density);
        int height = (int)(propHeight * density);

        view.measure(
                View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),
                View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY));

        view.layout(0, 0, width, height);
    }

    public MapView getView() {
        return view;
    }
}
