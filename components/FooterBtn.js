import React from 'react'
import {Button, Container,Footer,FooterTab,Icon,Text} from 'native-base'

export default class FooterBtn extends React.Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button active>
              <Icon name='home'/>
              <Text>Home</Text>
            </Button>
            <Button>
              <Icon name='search'/>
              <Text>Search</Text>
            </Button>
            {/* <Button>
              <Icon name='chatbubbles'/>
              <Text>Chat</Text>
            </Button> */}
            <Button>
              <Icon name='list-box'/>
              <Text>Recipes</Text>
            </Button>
            <Button>
              <Icon name='person'/>
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
  }
}
