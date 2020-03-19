import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Album = () => {
  return (
    <ScrollView>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={
              require('./image/6.jpeg')
            }
          />
          <View style={styles.headerContentStyle}>
            <Text>Jolin</Text>
            <Text>Ugly Beauty</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={
                require('./image/1.jpg')
            }
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={
              require('./image/4.jpg')
            }
          />
          <View style={styles.headerContentStyle}>
            <Text>Hebe</Text>
            <Text>To Hebe</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={
                require('./image/5.jpg')
            }
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={
                require('./image/6.jpeg')
              }
          />
          <View style={styles.headerContentStyle}>
            <Text>Jolin</Text>
            <Text>呸
            </Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={
                require('./image/3.jpg')
              }
          />
        </View>
      </View>

      
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={
              require('./image/8.jpeg')
            }
          />
          <View style={styles.headerContentStyle}>
            <Text>陳綺貞</Text>
            <Text>沙發海</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={
                require('./image/7.jpg')
            }
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={
              require('./image/9.jpg')
            }
          />
          <View style={styles.headerContentStyle}>
            <Text>李榮浩</Text>
            <Text>耳朵</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={
                require('./image/10.jpg')
            }
          />
        </View>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,


  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#a8c8d9",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: null
  }
});

export default Album;