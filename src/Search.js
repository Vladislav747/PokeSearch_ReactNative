import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Item, Icon, Input, Button } from 'native-base';
import SearchBody from './SearchBody';
import PokeLoader from './PokeLoader';
import axios from 'axios';

class Search extends React.Component {
  state = {
    pokeSearch: '',
    onCall: true,
    data: {},
  };

  searchPoke = () => {
    this.setState({ onCall: true });
    var self = this;
    axios
      .get(
        'https://pokeapi.co/api/v2/pokemon/' +
          this.state.pokeSearch.toLowerCase()
      )
      .then(function(response) {
        console.log(response.data, 'pokeSearch');
        self.setState({ data: response.data });
        self.setState({ onCall: false });
      })
      .catch(function(error) {
        console.log(error, 'error pokeSearch');
      });
  };

  renderBody = () => {
    if (this.state.onCall) {
      return <PokeLoader />;
    } else {
      return <SearchBody data={this.state.data} />;
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" onPress={this.searchPoke} />
            <Input
              value={this.state.pokeSearch}
              placeholder="Search"
              onChangeText={pokeSearch => this.setState({ pokeSearch })}
            />
          </Item>
        </Header>
        {this.renderBody()}
      </View>
    );
  }
}

const styles = {
  buttonText: {
    color: 'black',
  },
};

export default Search;
