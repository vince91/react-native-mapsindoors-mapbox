import Foundation
import React

import MapsIndoors
import MapsIndoorsCore
import MapsIndoorsMapbox
import MapboxMaps

@objc(MapsIndoorsViewManager)
class MapsIndoorsViewManager : RCTViewManager {
    @objc override static func requiresMainQueueSetup() -> Bool {return false}

    override func view() -> UIView! {
        let mapInitOptions = MapInitOptions(resourceOptions: ResourceOptions(accessToken: Bundle.main.object(forInfoDictionaryKey: "MBXAccessToken") as? String ?? ""))
        let mapView = MapView(frame: .zero, mapInitOptions: mapInitOptions)
        
        MapsIndoorsData.sharedInstance.mapView = MapBoxView(mapboxView: mapView)
        return mapView
    }

    @objc func create(_ node: NSNumber, nodeAgain: NSNumber) {
    }
}

struct MapBoxView: RCMapView {
    
    private let mapboxView: MapView
    
    init(mapboxView: MapView) {
        self.mapboxView = mapboxView
    }
    
    private func makeCameraUpdate(cameraUpdate: CameraUpdate) throws -> CameraOptions {
        var update: CameraOptions
        
        switch cameraUpdate.mode {
        case "fromPoint":
            guard let point = cameraUpdate.point else {
                throw CameraUpdateError.missingField("fromPoint", "point")
            }
            let camera = mapboxView.mapboxMap.cameraState
            
            update = CameraOptions(cameraState: camera)
            update.center = point.coordinate
        case "fromBounds":
            guard let bounds = cameraUpdate.bounds else {
                throw CameraUpdateError.missingField("fromBounds", "bounds")
            }
            let camera = mapboxView.mapboxMap.cameraState

            let camerabounds = CameraBoundsOptions(bounds: CoordinateBounds(southwest: bounds.southWest, northeast: bounds.northEast))
            
            update = CameraOptions(cameraState: camera)
            update.center = camerabounds.bounds?.center
        case "zoomBy":
            let camera = mapboxView.mapboxMap.cameraState
            
            update = CameraOptions(cameraState: camera)
            update.zoom = CGFloat(cameraUpdate.zoom!)
        case "zoomTo":
            let camera = mapboxView.mapboxMap.cameraState
            
            update = CameraOptions(cameraState: camera)
            update.zoom = CGFloat(cameraUpdate.zoom!)
        case "fromCameraPosition":
            guard let position = cameraUpdate.position else {
                throw CameraUpdateError.missingField("fromCameraPosition", "position")
            }
            let camera = mapboxView.mapboxMap.cameraState
            
            update = CameraOptions(cameraState: camera)
            update.center = position.target.coordinate
            update.bearing = CLLocationDirection(position.bearing)
            if (cameraUpdate.zoom != nil) {
                update.zoom = CGFloat(cameraUpdate.zoom!)
            }
        default:
            throw CameraUpdateError.unknownMode(cameraUpdate.mode)
        }
        
        return update
    }
    
    func animateCamera(cameraUpdate: CameraUpdate, duration: Int) throws {
        let cameraOption: CameraOptions
        
        cameraOption = try makeCameraUpdate(cameraUpdate: cameraUpdate)
        
        DispatchQueue.main.async {
            if (duration != 0) {
                mapboxView.mapboxMap.setCamera(to: cameraOption)
            } else {
                mapboxView.mapboxMap.setCamera(to: cameraOption)
            }
        }
    }
    
    func moveCamera(cameraUpdate: CameraUpdate) throws {
        let cameraOption: CameraOptions
        
        cameraOption = try makeCameraUpdate(cameraUpdate: cameraUpdate)
        
        DispatchQueue.main.async {
            mapboxView.mapboxMap.setCamera(to: cameraOption)
        }
    }
    
    func getConfig() -> MPMapConfig {
        return MPMapConfig(mapBoxView: mapboxView, accessToken: Bundle.main.object(forInfoDictionaryKey: "MBXAccessToken") as? String ?? "")
    }
}
