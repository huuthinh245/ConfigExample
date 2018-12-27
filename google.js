import { GoogleSignin } from 'react-native-google-signin';

const webClientId =
  '734096213002-pragio07tvdn5vbdfrvp5ijb3q0f4vbh.apps.googleusercontent.com';
const iosClientIdGoogle =
  '784185545904-cfq2p00g16dg4rt3iq66ml7nogauug3v.apps.googleusercontent.com';

const configGoogle = async () => {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  GoogleSignin.configure({
    webClientId,
    iosClientId: iosClientIdGoogle,
    offlineAccess: true
  });
};

export default configGoogle;
