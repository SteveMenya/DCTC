import { IonButton } from "@ionic/react";
import { useHistory } from "react-router";

export default function HelloHistoryState() {
  const history = useHistory();
  return (
    <>
      Hello History workds!
      <pre>{JSON.stringify(history.location.state, false, 2)}</pre>
      <IonButton
        onClick={() => {
          history.push({
            location: "/hellohistory",
            state: {
              detail: { someDataToPass: "The Value of interest" },
            },
          });
        }}
      >
        Click ME!
      </IonButton>
      <IonButton
        onClick={() => {
          history.push({
            location: "/hellohistory",
            state: {
              detail: {
                fruits: ["Apple", "Orange", "Peach"],
                fruitDefinitions: {
                  apple: {
                    name: "apple",
                    color: "red",
                  },
                  orange: {
                    name: "orange",
                    color: "orange",
                  },
                },
              },
            },
          });
        }}
      >
        More Data Example!
      </IonButton>
    </>
  );
}
