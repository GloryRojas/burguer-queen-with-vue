/* eslint-disable linebreak-style */
import firebase from '../firestore';

const db = firebase.firestore();

const dataFirebase = () => {
  db.collection('menu').get()
    .then((res) => {
      const products = [];
      res.forEach((doc) => {
        products.push(doc.data());
      });
      console.log(products);
    });
};

export default dataFirebase;
