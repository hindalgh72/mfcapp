import React from 'react'
import {StyleSheet} from 'react-native'
import {Button,Header,Icon,Right,Body,Title,Badge,Text} from 'native-base'

export default class HeaderAll extends React.Component {
  render() {
    return (
        <Header>
            <Body>
                <Title>MemariFoodClub</Title>
            </Body>
            <Right>
                <Button transparent badge>
                    <Icon name='notifications-outline'/>
                    <Badge style={styles.badget}><Text style={styles.badgetext}>2</Text></Badge>
                </Button>
                <Button transparent>
                    <Icon name='add'/>
                </Button>
            </Right>
        </Header>
    )
  }
}

const styles=StyleSheet.create({
    badget:{
        width: 22,
        height: 22,
        marginLeft: -2,
    },
    badgetext: {
        fontSize: 10,
    },
})