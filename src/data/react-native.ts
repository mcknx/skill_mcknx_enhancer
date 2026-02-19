import { Scenario } from './types';

export const reactNativeScenarios: Scenario[] = [
  {
    id: 'rn-core-1',
    category: 'Beginner • Core Components',
    problem: 'You are converting a React web card component to React Native. Which component should replace a div wrapper?',
    visual: `Web:        <div className="card">...</div>
React Native: ?

Native UI tree:
Screen
 └─ Container
    └─ Text`,
    options: ['<Container>', '<View>', '<Section>', '<Box>'],
    correctAnswer: '<View>',
    hint: 'React Native uses core primitives, not HTML tags.',
    explanation: 'In React Native, View is the base container component and replaces div-like structure from the web.',
    codeExample: `import { View, Text } from 'react-native';

export function Card() {
  return (
    <View>
      <Text>Hello mobile</Text>
    </View>
  );
}`
  },
  {
    id: 'rn-hooks-1',
    category: 'Beginner • State',
    problem: 'Your button should increment a counter when tapped. Which hook should manage the number?',
    visual: `Tap button
0 -> 1 -> 2 -> 3`,
    options: ['useRef', 'useMemo', 'useState', 'useEffect'],
    correctAnswer: 'useState',
    hint: 'You need reactive state that triggers re-render.',
    explanation: 'useState is the standard hook for local, interactive component state like counters and toggles.',
    codeExample: `import { useState } from 'react';
import { Pressable, Text } from 'react-native';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Pressable onPress={() => setCount(count + 1)}>
      <Text>Count: {count}</Text>
    </Pressable>
  );
}`
  },
  {
    id: 'rn-list-1',
    category: 'Intermediate • Performance',
    problem: 'You need to render 3,000 products efficiently. Which component is best for virtualization?',
    visual: `Large list rendering:
- 3,000 rows
- smooth scroll needed
- low memory usage`,
    options: ['ScrollView', 'FlatList', 'View + map', 'Section'],
    correctAnswer: 'FlatList',
    hint: 'Use the list component that renders only visible items.',
    explanation: 'FlatList virtualizes rows and is built for large datasets, unlike ScrollView which renders everything at once.',
    codeExample: `import { FlatList, Text } from 'react-native';

<FlatList
  data={products}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>`
  },
  {
    id: 'rn-nav-1',
    category: 'Intermediate • Navigation',
    problem: 'From ProductList, you need to open ProductDetail with an id param. What is the right call?',
    visual: `Stack:
ProductList -> ProductDetail(id)

Need route params`,
    options: [
      "navigation.open('ProductDetail', id)",
      "navigation.navigate('ProductDetail', { id })",
      "router.push('/detail?id')",
      "setScreen('ProductDetail')"
    ],
    correctAnswer: "navigation.navigate('ProductDetail', { id })",
    hint: 'React Navigation passes params in second argument object.',
    explanation: 'navigate(screenName, paramsObject) is the standard pattern for opening a screen with route params.',
    codeExample: `navigation.navigate('ProductDetail', { id: product.id });`
  },
  {
    id: 'rn-storage-1',
    category: 'Intermediate • Persistence',
    problem: 'You need to save a user auth token securely on device. Which option is safer than AsyncStorage?',
    visual: `Token storage options:
- Plain key/value
- Encrypted secure storage`,
    options: ['AsyncStorage', 'SecureStore', 'In-memory variable', 'JSON file'],
    correctAnswer: 'SecureStore',
    hint: 'Choose encrypted secure storage for secrets.',
    explanation: 'SecureStore (or platform keychain/keystore-backed storage) is preferable for auth tokens versus plain AsyncStorage.',
    codeExample: `import * as SecureStore from 'expo-secure-store';

await SecureStore.setItemAsync('authToken', token);
const saved = await SecureStore.getItemAsync('authToken');`
  }
];
