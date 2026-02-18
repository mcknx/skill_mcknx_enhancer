# React Native — Mastery Learning Guide

> **Goal:** Go from zero to production-ready React Native developer.
> **Approach:** Follow roadmap.sh structure + official docs, then test each concept interactively in this repo's Skill Enhancer system.

---

## Sources

| Source | URL | Use |
|--------|-----|-----|
| roadmap.sh | https://roadmap.sh/react-native | Full learning path (95 topics) |
| React Native Docs | https://reactnative.dev/docs/getting-started | Official reference & API docs |
| Expo Docs | https://docs.expo.dev/ | Expo framework (recommended starter) |
| react.dev | https://react.dev/learn | React fundamentals (prerequisite) |
| W3Schools React | https://www.w3schools.com/react/ | React basics refresher |
| javascript.info | https://javascript.info/ | Modern JS deep-dive (ES6+, async, modules) |
| freeCodeCamp | https://www.freecodecamp.org/news/tag/react-native/ | Free articles, tutorials, project walkthroughs |
| MDN Web Docs | https://developer.mozilla.org/en-US/docs/Learn_web_development | Web fundamentals & JS references |
| The Odin Project | https://www.theodinproject.com/paths | Full Stack JS path (JS deep-dive prerequisite) |

---

## Learning Path Overview

```
Phase 1: Prerequisites (Week 1-2)
Phase 2: React Native Fundamentals (Week 3-4)
Phase 3: Core Components & APIs (Week 5-6)
Phase 4: Navigation & State Management (Week 7-8)
Phase 5: Networking, Storage & Performance (Week 9-10)
Phase 6: Testing, CI/CD & Deployment (Week 11-12)
Phase 7: Advanced Patterns (Week 13-14)
```

---

## Phase 1: Prerequisites (Week 1-2)

### 1.1 JavaScript Essentials
- [ ] ES6+ features (destructuring, spread, arrow functions, template literals)
- [ ] Promises, async/await
- [ ] Array methods (map, filter, reduce)
- [ ] Modules (import/export)
- [ ] Error handling (try/catch)

**javascript.info:** https://javascript.info/

### 1.2 React Fundamentals
- [ ] JSX syntax and expressions
- [ ] Functional components
- [ ] Props — passing data to components
- [ ] State — useState hook
- [ ] Side Effects — useEffect hook
- [ ] Lists, keys, and conditional rendering
- [ ] Event handling
- [ ] Context API basics

**react.dev:** https://react.dev/learn
**W3Schools:** https://www.w3schools.com/react/

### 1.3 Development Environment Setup
- [ ] Node.js and npm/yarn installation
- [ ] Expo CLI vs React Native CLI (understand differences)
- [ ] Set up Expo Go on physical device
- [ ] Android Studio setup (Android emulator)
- [ ] Xcode setup (iOS simulator — macOS only)
- [ ] VS Code extensions for React Native

**React Native Docs:** https://reactnative.dev/docs/set-up-your-environment

### 1.4 Understanding Native vs Web
- [ ] How React Native differs from React (web)
- [ ] Native components vs DOM elements
- [ ] Bridge architecture (old) vs New Architecture (Fabric + TurboModules)
- [ ] When to use React Native vs a web app

**roadmap.sh:** https://roadmap.sh/react-native — "Introduction", "Prerequisites"

#### 🧪 Interactive Test Ideas for Phase 1
```
Scenario: "You want to quickly prototype a React Native app without installing Xcode or Android Studio."
Options: [React Native CLI, Expo CLI, Create React App, Next.js]
Answer: Expo CLI

Scenario: "In React Native, which replaces the HTML <div> element?"
Options: [<div>, <View>, <Container>, <Section>]
Answer: <View>

Scenario: "Your React component needs to run code when it first mounts."
Options: [useState, useEffect, useRef, useMemo]
Answer: useEffect
```

---

## Phase 2: React Native Fundamentals (Week 3-4)

### 2.1 Core Components
- [ ] `<View>` — container component (like div)
- [ ] `<Text>` — text rendering (required for all text)
- [ ] `<Image>` — local and remote images
- [ ] `<ScrollView>` — scrollable container
- [ ] `<TextInput>` — text input field
- [ ] `<Button>` and `<Pressable>` — touch handling
- [ ] `<FlatList>` — performant list rendering
- [ ] `<SectionList>` — grouped list rendering
- [ ] `<ActivityIndicator>` — loading spinner
- [ ] `<Switch>` and `<StatusBar>`

### 2.2 Styling in React Native
- [ ] StyleSheet API (StyleSheet.create)
- [ ] Flexbox layout (default layout system)
- [ ] flex, flexDirection, justifyContent, alignItems
- [ ] Dimensions API and useWindowDimensions
- [ ] Platform-specific styling (Platform.OS, Platform.select)
- [ ] Responsive design patterns
- [ ] Styled Components / NativeWind (Tailwind for RN)

### 2.3 Handling User Input
- [ ] Touchable components (Pressable, TouchableOpacity, TouchableHighlight)
- [ ] Gesture handling basics
- [ ] Keyboard handling (KeyboardAvoidingView)
- [ ] Form patterns in React Native

**React Native Docs:** https://reactnative.dev/docs/components-and-apis

#### 🧪 Interactive Test Ideas for Phase 2
```
Scenario: "You need to render a list of 10,000 items efficiently."
Options: [ScrollView, FlatList, map() inside View, SectionList]
Answer: FlatList

Scenario: "You want text to render on screen in React Native."
Options: [<p>Hello</p>, <span>Hello</span>, <Text>Hello</Text>, <Label>Hello</Label>]
Answer: <Text>Hello</Text>

Scenario: "You need a layout where items stack horizontally."
Options: [flexDirection: 'column', flexDirection: 'row', display: 'inline', float: 'left']
Answer: flexDirection: 'row'

Scenario: "You need different styling on iOS vs Android."
Options: [CSS media queries, Platform.select(), if(browser), @supports]
Answer: Platform.select()
```

---

## Phase 3: Core APIs & Platform Features (Week 5-6)

### 3.1 Navigation (React Navigation)
- [ ] Install and configure React Navigation
- [ ] Stack Navigator — screen-to-screen navigation
- [ ] Tab Navigator — bottom tab bar
- [ ] Drawer Navigator — side menu
- [ ] Passing parameters between screens
- [ ] Nested navigators
- [ ] Deep linking configuration
- [ ] Navigation state and lifecycle

**React Navigation:** https://reactnavigation.org/docs/getting-started

### 3.2 Platform APIs
- [ ] Linking API — opening URLs and deep links
- [ ] Alert and modal dialogs
- [ ] Clipboard API
- [ ] Vibration API
- [ ] AppState — app lifecycle events
- [ ] Appearance API — dark mode detection

### 3.3 Expo SDK Features
- [ ] Camera and image picker
- [ ] Location services
- [ ] Notifications (push and local)
- [ ] File system access
- [ ] Sensors (accelerometer, gyroscope)
- [ ] Audio and video playback
- [ ] Biometric authentication (Face ID / Fingerprint)

### 3.4 Animations
- [ ] Animated API basics
- [ ] Animated.timing, Animated.spring, Animated.decay
- [ ] Interpolation
- [ ] LayoutAnimation for simple transitions
- [ ] React Native Reanimated (for complex animations)
- [ ] Lottie animations integration
- [ ] Gesture Handler + Reanimated combined

**roadmap.sh:** https://roadmap.sh/react-native — "Core Components", "Networking", "Animations"

#### 🧪 Interactive Test Ideas for Phase 3
```
Scenario: "You need a bottom tab bar with Home, Search, and Profile screens."
Options: [Stack Navigator, Tab Navigator, Drawer Navigator, Switch Navigator]
Answer: Tab Navigator

Scenario: "You want a spring-like bounce animation when a card appears."
Options: [Animated.timing, Animated.spring, Animated.decay, CSS transitions]
Answer: Animated.spring

Scenario: "Your app needs to detect if the user has switched to dark mode."
Options: [Appearance API, Platform.OS, Dimensions API, useColorScheme hook]
Answer: useColorScheme hook (uses Appearance API)

Scenario: "You need to pass the user's ID from a list screen to a detail screen."
Options: [Global variable, navigation.navigate('Detail', { id }), AsyncStorage, Redux]
Answer: navigation.navigate('Detail', { id })
```

---

## Phase 4: State Management & Data (Week 7-8)

### 4.1 Local State Management
- [ ] useState for component state
- [ ] useReducer for complex state
- [ ] useContext for shared state
- [ ] Custom hooks for reusable logic

### 4.2 Global State Management
- [ ] Context API + useReducer pattern
- [ ] Zustand (lightweight, recommended)
- [ ] Redux Toolkit (for complex apps)
- [ ] React Query / TanStack Query (server state)
- [ ] Jotai or Recoil (atomic state)

### 4.3 Networking
- [ ] fetch API for HTTP requests
- [ ] Axios integration
- [ ] REST API consumption
- [ ] GraphQL with Apollo Client
- [ ] WebSocket connections
- [ ] Error handling and retry logic
- [ ] Authentication tokens and headers

### 4.4 Local Storage & Persistence
- [ ] AsyncStorage — key-value storage
- [ ] SecureStore (Expo) — encrypted storage
- [ ] MMKV — high-performance storage
- [ ] SQLite — local relational database
- [ ] Realm — mobile database
- [ ] Watermelon DB — for large datasets

**roadmap.sh:** https://roadmap.sh/react-native — "State Management", "Storage", "Networking"

#### 🧪 Interactive Test Ideas for Phase 4
```
Scenario: "You need to cache API responses and handle loading/error states for server data."
Options: [useState + useEffect, Redux, React Query / TanStack Query, AsyncStorage]
Answer: React Query / TanStack Query

Scenario: "You need to store a JWT token securely on the device."
Options: [AsyncStorage, SecureStore, localStorage, global variable]
Answer: SecureStore

Scenario: "Your app has a simple shopping cart shared across 3 screens."
Options: [Redux Toolkit, Zustand, Context API, Props drilling]
Answer: Zustand (or Context API for simple cases)

Scenario: "You need to persist offline data with complex queries and relations."
Options: [AsyncStorage, MMKV, SQLite, JSON file]
Answer: SQLite
```

---

## Phase 5: Testing & Quality (Week 9-10)

### 5.1 Testing Strategies
- [ ] Unit testing with Jest
- [ ] Component testing with React Native Testing Library
- [ ] Snapshot testing
- [ ] Integration testing
- [ ] E2E testing with Detox
- [ ] E2E testing with Maestro
- [ ] Mocking APIs and modules

### 5.2 Code Quality
- [ ] TypeScript in React Native
- [ ] ESLint and Prettier configuration
- [ ] Husky for pre-commit hooks
- [ ] Error boundaries
- [ ] Crash reporting (Sentry, Bugsnag)
- [ ] Performance monitoring

### 5.3 Performance Optimization
- [ ] Avoiding unnecessary re-renders (React.memo, useMemo, useCallback)
- [ ] FlatList optimization (getItemLayout, keyExtractor, windowSize)
- [ ] Image optimization and caching
- [ ] Hermes engine (JS engine optimization)
- [ ] RAM bundles and inline requires
- [ ] React DevTools profiler
- [ ] Flipper debugging

**roadmap.sh:** https://roadmap.sh/react-native — "Testing", "Performance"

#### 🧪 Interactive Test Ideas for Phase 5
```
Scenario: "You need to test a user flow from login to dashboard on an actual device/emulator."
Options: [Jest, React Native Testing Library, Detox, Snapshot testing]
Answer: Detox

Scenario: "A FlatList of 5000 items is rendering slowly. What helps MOST?"
Options: [Use ScrollView instead, Add getItemLayout and remove anonymous functions, Use Redux, Add more RAM]
Answer: Add getItemLayout and remove anonymous functions

Scenario: "A child component re-renders on every parent render even though its props haven't changed."
Options: [useRef, React.memo, useState, useContext]
Answer: React.memo
```

---

## Phase 6: CI/CD & Deployment (Week 11-12)

### 6.1 Building for Production
- [ ] Expo Application Services (EAS) Build
- [ ] React Native CLI build (Gradle for Android, Xcode for iOS)
- [ ] Code signing (iOS provisioning profiles, Android keystore)
- [ ] App icons and splash screens
- [ ] Versioning strategy (semver)
- [ ] Environment-specific builds (dev, staging, prod)

### 6.2 App Store Deployment
- [ ] Apple App Store submission process
- [ ] Google Play Store submission process
- [ ] App Store guidelines and review process
- [ ] Beta testing (TestFlight, Google Play Internal Testing)
- [ ] Over-the-Air (OTA) updates with EAS Update

### 6.3 CI/CD Pipeline
- [ ] GitHub Actions for React Native
- [ ] EAS Build in CI
- [ ] Automated testing in CI
- [ ] Fastlane for deployment automation
- [ ] CodePush for OTA updates (Microsoft)

**roadmap.sh:** https://roadmap.sh/react-native — "CI/CD", "Publishing"

#### 🧪 Interactive Test Ideas for Phase 6
```
Scenario: "You want to push a JS-only bug fix to users without going through the App Store."
Options: [New App Store release, OTA Update (EAS Update), Force update dialog, Background sync]
Answer: OTA Update (EAS Update)

Scenario: "You need to build your Expo app for iOS without a Mac."
Options: [Not possible, EAS Build (cloud), React Native CLI, Xcode in browser]
Answer: EAS Build (cloud)

Scenario: "Your app needs beta testing on iOS before public release."
Options: [Sideload .ipa, TestFlight, APK distribution, Expo Go]
Answer: TestFlight
```

---

## Phase 7: Advanced Patterns (Week 13-14)

### 7.1 Native Modules & Integration
- [ ] Creating native modules (bridge to Swift/Kotlin)
- [ ] TurboModules (new architecture)
- [ ] Fabric renderer (new architecture)
- [ ] Using native libraries via expo-modules
- [ ] Brownfield integration (RN in existing native app)

### 7.2 Advanced Architecture
- [ ] Monorepo with shared code (web + mobile)
- [ ] Offline-first architecture
- [ ] Real-time features (WebSocket, Server-Sent Events)
- [ ] Push notification handling
- [ ] Background tasks
- [ ] Internationalization (i18n with react-i18next)

### 7.3 Security
- [ ] Secure storage best practices
- [ ] Certificate pinning (SSL pinning)
- [ ] Obfuscation and ProGuard/R8
- [ ] Jailbreak/root detection
- [ ] Secure API communication

### 7.4 Popular Libraries Ecosystem
- [ ] React Native Paper (Material Design)
- [ ] NativeBase / Tamagui (cross-platform UI)
- [ ] React Native Maps
- [ ] React Native Firebase
- [ ] React Native WebView
- [ ] React Native Skia (2D graphics)
- [ ] Expo Router (file-based navigation)

#### 🧪 Interactive Test Ideas for Phase 7
```
Scenario: "You need to access a device-specific Bluetooth API not available in React Native."
Options: [JavaScript polyfill, Native Module (bridge), WebView hack, Ignore the feature]
Answer: Native Module (bridge)

Scenario: "Your app must work offline and sync data when back online."
Options: [Just use fetch, Offline-first with Watermelon DB + sync, localStorage, Disable app offline]
Answer: Offline-first with Watermelon DB + sync

Scenario: "You need to share React component code between a web app and mobile app."
Options: [Copy paste code, Monorepo with shared packages, Two separate codebases, Use Electron]
Answer: Monorepo with shared packages
```

---

## Skill Enhancer Scenario Categories

Map these to the interactive testing system in this repo:

| Category | Topics | Scenarios Count |
|----------|--------|----------------|
| Beginner • Setup | Expo CLI, project structure, dev environment | ~5 |
| Beginner • Components | View, Text, Image, FlatList, ScrollView | ~8 |
| Intermediate • Styling | Flexbox, StyleSheet, responsive, Platform-specific | ~6 |
| Intermediate • Navigation | Stack, Tab, Drawer, params, deep linking | ~7 |
| Intermediate • State & Data | useState, Context, Zustand, React Query, APIs | ~8 |
| Intermediate • Storage | AsyncStorage, SecureStore, SQLite | ~5 |
| Advanced • Performance | FlatList optimization, memoization, Hermes | ~5 |
| Advanced • Testing | Jest, RNTL, Detox, snapshot testing | ~5 |
| Advanced • Deployment | EAS Build, App Store, OTA updates | ~4 |
| Advanced • Native | Native modules, new architecture, security | ~4 |
| **Total** | | **~57** |

---

## Recommended Learning Order

1. ✅ react.dev Quick Start (if React is new)
2. ✅ React Native docs — Introduction & Environment Setup
3. ✅ Expo docs — tutorial (build your first app)
4. ✅ roadmap.sh/react-native — follow topic by topic
5. ✅ Build a project after each phase
6. ✅ Test yourself with Skill Enhancer scenarios

## Project Ideas (Build After Each Phase)

| Phase | Project |
|-------|---------|
| Phase 2 | Simple counter app with styled UI |
| Phase 3 | Weather app with location, API, and animations |
| Phase 4 | Todo app with global state, persistence, and networking |
| Phase 5 | Recipe app with full test suite and performance profiling |
| Phase 6 | Deploy a polished app to App Store / Play Store |
| Phase 7 | Cross-platform app sharing code between web and mobile |
