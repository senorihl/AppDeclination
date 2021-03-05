import * as React from 'react';
import {Linking} from 'react-native';
import {Person} from '../interfaces/Person';
import {Avatar, ListItem} from 'react-native-elements';

const PersonItem: React.FunctionComponent<{person: Person}> = ({person}) => {
  return (
    <ListItem
      onPress={() => {
        Linking.openURL(`mailto:${person.email}`).catch((e) => console.warn(e));
      }}>
      {person.avatar && (
        <Avatar rounded size="medium" source={{uri: person.avatar}} />
      )}
      <ListItem.Content>
        <ListItem.Title>
          {person.first_name} {person.last_name}
        </ListItem.Title>
        <ListItem.Subtitle style={{color: '#aaa'}}>
          Tap to send email to {person.email}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default PersonItem;
