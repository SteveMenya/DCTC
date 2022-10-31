import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";

export default function About() {
    const [firstName, setFirstName] = useState('');
    const [birthday, setBirthDay] = useState('');

    return (
        <div>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            About Me!
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonPage>
        </div>
    )
}