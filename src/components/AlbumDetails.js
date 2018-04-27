import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailStyle, sectionHeaderStyle, imageStyle, imageContainerStyle } = Styles;
  return (
    <Card>
      <CardSection>
        <View style={imageContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={sectionHeaderStyle}>
          <Text key={`${title}title`}>{title}</Text>
          <Text key={`${artist}artist`}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >Buy Now</Button> 
      </CardSection>
    </Card>
  );
};

const Styles = {
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  sectionHeaderStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageContainerStyle: {
    marginLeft: 5,
    marginRight: 5
  }
};
export default AlbumDetails;
