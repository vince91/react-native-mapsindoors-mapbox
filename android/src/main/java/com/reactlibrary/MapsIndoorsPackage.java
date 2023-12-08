package com.reactlibrary;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.mapsindoors.core.OnResultReadyListener;
import com.mapsindoors.core.errors.MIError;
import com.reactlibrary.core.DirectionsRendererModule;
import com.reactlibrary.core.DirectionsServiceModule;
import com.reactlibrary.core.MPDisplayRuleModule;
import com.reactlibrary.core.MapControlModule;
import com.reactlibrary.core.MapsIndoorsModule;
import com.reactlibrary.core.UtilsModule;

public class MapsIndoorsPackage implements ReactPackage, OnResultReadyListener {
    private MapControlModule mapControlModule;
    private MapsIndoorsViewManager viewManager;
    private ReactApplicationContext mContext;

    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
        mContext = reactContext;
        mapControlModule = new MapControlModule(reactContext);
        return Arrays.asList(
                new MapsIndoorsModule(reactContext),
                mapControlModule,
                new DirectionsServiceModule(reactContext),
                new DirectionsRendererModule(reactContext, mapControlModule),
                new MPDisplayRuleModule(reactContext),
                new UtilsModule(reactContext));
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
        viewManager = new MapsIndoorsViewManager(reactContext, this);
        return Collections.singletonList(viewManager);
    }

    @Override
    public void onResultReady(@Nullable MIError miError) {
        mapControlModule.setView(new MapboxMapView(viewManager.getView(), mContext));
    }
}
