import React, { Component } from 'react'
import {StyleSheet,Image} from 'react-native'
import {Container,Header,Title,Content,Footer,FooterTab,Button,Card,Left,Right,Body,Icon,Text, CardItem, Thumbnail} from 'native-base';
import { Font } from 'expo';
import HeaderAll from './HeaderAll'
import { Ionicons } from '@expo/vector-icons';

export default class Home extends Component {

      // Later on in your component
async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
  }
  render() {
    return (
      <Container>
        <HeaderAll/>
        <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source= {require('../images/login.jpg')}/>
                  <Body>
                    <Text>Butter Chicken</Text>
                    <Text note>By Hindal Ghosh</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody style={styles.imagecard}>
                <Image source={require('../images/btrch.jpg')} style={styles.cardImage}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon name='thumbs-up' />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                   <Icon name='chatboxes' />
                   <Text>1200 comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name='time'/>
                    <Text>10h ago</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source= {require('../images/login.jpg')}/>
                  <Body>
                    <Text>Butter Chicken</Text>
                    <Text note>By Hindal Ghosh</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody style={styles.imagecard}>
                <Image source={require('../images/btrch.jpg')} style={styles.cardImage}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon name='thumbs-up' />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                   <Icon name='chatboxes' />
                   <Text>1200 comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name='time'/>
                    <Text>10h ago</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source= {require('../images/login.jpg')}/>
                  <Body>
                    <Text>Butter Chicken</Text>
                    <Text note>By Hindal Ghosh</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody style={styles.imagecard}>
                <Image source={require('../images/btrch.jpg')} style={styles.cardImage}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon name='thumbs-up' />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                   <Icon name='chatboxes' />
                   <Text>1200 comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name='time'/>
                    <Text>10h ago</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
        </Content>
        
      </Container>
    )
  }
}

const styles=StyleSheet.create({
  cardImage: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  imagecard: {
    height: 230,
    width: '100%',
  }
})
