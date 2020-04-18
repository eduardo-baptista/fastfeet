import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const CameraWrapper = styled.View`
  width: 100%;
  border-radius: 4px;
  height: 85%;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 10.9px;
  position: relative;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const Preview = styled.Image`
  flex: 1;
`;

export const CameraButton = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.3);
  align-self: center;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
`;
