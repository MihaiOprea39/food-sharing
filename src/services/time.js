import firebase from "../firebase";

export const getFirebaseTime = (seconds, milliseconds) => {
    const times = new firebase.firestore.Timestamp(seconds, milliseconds);

    return times.toDate();
}
