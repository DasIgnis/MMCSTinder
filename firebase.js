import config from './firebase.config'

import firebase from "firebase";
import 'firebase/firestore'

firebase.initializeApp(config);

export default firebase;