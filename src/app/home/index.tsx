import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { contacts } from "../../utils/contacts";
import { Card } from "../../components/card";
import { Option } from "../../components/option";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

export function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Swipeable
            containerStyle={styles.swipeableContainer}
            overshootRight={false}
            friction={2}
            rightThreshold={20}
            renderRightActions={() => (
              <View style={styles.rightActions}>
                <Option icon="open-in-new" backgroundColor="#00b960" />
                <Option icon="close" backgroundColor="#3E68D7" />
              </View>
            )}
          >
            <Card name={item.name} email={item.email} />
          </Swipeable>
        )}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
