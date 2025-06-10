import { useRef } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { contacts } from "../../utils/contacts";
import { Card } from "../../components/card";
import { Option } from "../../components/option";
import Swipeable, {
  SwipeableMethods,
} from "react-native-gesture-handler/ReanimatedSwipeable";
import { Directions } from "react-native-gesture-handler";

export function Home() {
  const openSwepeableRef = useRef<SwipeableMethods | null>(null);

  function onSwipeableWillOpen(direction: "left" | "right") {
    if (direction === "left") {
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          let current: SwipeableMethods | null = null;

          return (
            <Swipeable
              ref={(swipeable) => (current = swipeable)}
              containerStyle={styles.swipeableContainer}
              overshootRight={false}
              onSwipeableWillOpen={onSwipeableWillOpen}
              renderRightActions={() => (
                <View style={styles.rightActions}>
                  <Option icon="open-in-new" backgroundColor="#00b960" />
                  <Option icon="close" backgroundColor="#fff" />
                </View>
              )}
              renderLeftActions={() => (
                <View style={styles.leftActions}>
                  <Option icon="delete" backgroundColor="#E83D55" />
                </View>
              )}
            >
              <Card name={item.name} email={item.email} />
            </Swipeable>
          );
        }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
