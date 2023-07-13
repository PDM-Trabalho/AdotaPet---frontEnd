import MapView, { Marker } from 'react-native-maps';
import { ViewStyle } from './style';

interface ObjPosition {
    latitude: number,
    longitude: number
}

interface MapProps {
    position: ObjPosition,
}
  
export default function Map({ position }: MapProps) {
    return (
        <ViewStyle>
            <MapView
                style={{
                    height: 200,
                    width: "100%",
                }}
                initialRegion={{
                    ...position,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
            >
                <Marker 
                    coordinate={position}
                />
            </MapView>
        </ViewStyle>
    );
}