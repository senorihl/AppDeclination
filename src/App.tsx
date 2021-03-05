import React from 'react';
import {StyleSheet, Platform, StatusBar, FlatList} from 'react-native';
import {Person} from './interfaces/Person';
import normalize from './helpers/normalizeText';
import {Header} from 'react-native-elements';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import PersonItem from './component/PersonItem';
import variant from 'current-variant';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [source, setSource] = React.useState<string>('empty');
  const [persons, setPersons] = React.useState<Person[]>([]);

  React.useEffect(() => {
    variant.fetchUsers().then((users) => {
      setPersons(users);
      setSource(variant.source);
    });
  }, []);

  return (
    <>
      <Header
        centerComponent={{
          text: `Users [${source}]`,
          style: {color: '#fff', fontSize: normalize(30)},
        }}
      />
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <FlatList
            data={persons}
            renderItem={({item}) => <PersonItem person={item} />}
            keyExtractor={(item) => `${item.id}`}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  PersonItem: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    borderColor: '#e1e8ee',
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  PersonItemWrapper: {
    backgroundColor: 'transparent',
  },
  PersonItemTitle: {
    fontSize: normalize(14),
    color: '#43484d',
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
      },
      default: {
        fontWeight: 'bold',
      },
    }),
    textAlign: 'center',
    marginBottom: 15,
  },
  PersonItemImage: {
    width: null,
    height: 150,
  },
});

export default App;
