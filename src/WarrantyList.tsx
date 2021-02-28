import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
// import { firebase } from '@react-native-firebase/auth';

interface IWarranty {
    key: string;
}

export const WarrantyList = () => {
    const [warranty, setWarranty] = useState<IWarranty[]>([]); // Initial empty array of users
    const [loading, setLoading] = useState(true); // Set loading to true on component mount

    // On load, fetch our users and subscribe to updates
    useEffect(() => {
        // const userId = firebase.auth().currentUser?.uid || undefined;
        const unsubscribe = firestore()
            .collection('warranty')
            // .where('owner', '==', userId)
            .onSnapshot((querySnapshot) => {
                if (!querySnapshot) {
                    return {};
                }
                // Add users into an array
                const documents = querySnapshot.docs.map((documentSnapshot) => {
                    return {
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id, // required for FlatList
                    };
                }) as IWarranty[];

                // Update state with the users array
                setWarranty(documents);

                // As this can trigger multiple times, only update loading after the first update
                if (loading) {
                    setLoading(false);
                }
            });

        return () => unsubscribe(); // Stop listening when unmounts
    }, [loading]);

    if (loading) {
        return null; // Show a loading spinner
    }

    console.log(warranty);

    return <FlatList data={warranty} renderItem={({ item }: { item: IWarranty }) => <Text>{item.key}</Text>} />;
};
