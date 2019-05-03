import React, { Component } from 'react'
import {Container,Header,Text, Item, Icon, Input,Button} from 'native-base'

export default class Search extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name='ios-search' />
            <Input placeholder='Search'
            />
            <Icon name='list-box'/>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    )
  }
}
