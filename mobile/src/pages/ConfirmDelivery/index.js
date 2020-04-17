import React from 'react';
import { RNCamera } from 'react-native-camera';

import { HalfPurpleBackground } from '~/components/Backgrounds';

export default function ConfirmDelivery() {
  return (
    <HalfPurpleBackground>
      <RNCamera captureAudio={false} style={{ width: '50%', height: '100%' }} />
    </HalfPurpleBackground>
  );
}
