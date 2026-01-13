import { Scenario } from './types';

export const reactHooksScenarios: Scenario[] = [
  // ===================================
  // BEGINNER LEVEL (1-12)
  // ===================================
  {
    id: 'useState-1',
    category: 'Beginner • State',
    problem: 'I have a counter that users can increment and decrement. I need to store the current count value and update the UI whenever it changes.',
    visual: `┌─────────────────────────────────┐
│         Counter: 5              │
│    ┌─────┐         ┌─────┐      │
│    │  -  │         │  +  │      │
│    └─────┘         └─────┘      │
└─────────────────────────────────┘
         │                 │
         ▼                 ▼
    count = 4         count = 6
         │                 │
         └────────┬────────┘
                  ▼
           UI Re-renders`,
    options: ['useState', 'useEffect', 'useRef', 'useMemo'],
    correctAnswer: 'useState',
    hint: 'Think about what happens when the value changes - does the UI need to update?',
    explanation: 'useState is the go-to hook for managing local component state that triggers re-renders when updated.',
    codeExample: `const [count, setCount] = useState(0);

// Increment
setCount(count + 1);

// Or use functional update for safety
setCount(prev => prev + 1);`
  },
  {
    id: 'useEffect-1',
    category: 'Beginner • Side Effects',
    problem: 'I need to fetch user data from an API when my component first loads, and I want to update the component with the fetched data.',
    visual: `Component Mounts
       │
       ▼
┌──────────────┐      ┌──────────────┐
│   Render     │      │    API       │
│   (empty)    │ ───► │   Server     │
└──────────────┘      └──────────────┘
       │                     │
       │◄────────────────────┘
       │         { user data }
       ▼
┌──────────────┐
│   Re-render  │
│  (with data) │
└──────────────┘`,
    options: ['useState', 'useEffect', 'useCallback', 'useContext'],
    correctAnswer: 'useEffect',
    hint: 'This involves an action that happens AFTER the component renders, outside of React\'s normal flow.',
    explanation: 'useEffect is used for side effects - operations that happen outside React\'s render cycle, like API calls, subscriptions, or DOM manipulation.',
    codeExample: `const [user, setUser] = useState(null);

useEffect(() => {
  fetch('/api/user')
    .then(res => res.json())
    .then(data => setUser(data));
}, []); // Empty array = run once on mount`
  },
  {
    id: 'useRef-1',
    category: 'Beginner • DOM Access',
    problem: 'I need to programmatically focus an input field when a modal opens, so users can immediately start typing.',
    visual: `┌────────────────────────────────┐
│         Search Modal           │
│   ┌──────────────────────┐     │
│   │ 🔍 Type to search... │ ◄── FOCUS HERE!
│   └──────────────────────┘     │
│                                │
│   Need direct access to the    │
│   actual <input> DOM element   │
│   to call .focus() on it       │
└────────────────────────────────┘

    ref.current.focus()`,
    options: ['useState', 'useEffect', 'useRef', 'useMemo'],
    correctAnswer: 'useRef',
    hint: 'You need direct access to the actual DOM element, not a React state value.',
    explanation: 'useRef creates a mutable reference that persists across renders. It\'s commonly used to access DOM elements directly.',
    codeExample: `const inputRef = useRef(null);

// In your JSX
<input ref={inputRef} />

// Focus the input
useEffect(() => {
  inputRef.current?.focus();
}, []);`
  },
  {
    id: 'useContext-1',
    category: 'Beginner • Context',
    problem: 'I have a theme setting (dark/light mode) that needs to be accessible by many nested components without passing props through every level.',
    visual: `         ┌─────────────────┐
         │      App        │  theme="dark"
         └────────┬────────┘
      ┌───────────┼───────────┐
      ▼           ▼           ▼
  ┌───────┐  ┌───────┐  ┌───────┐
  │Header │  │Content│  │Footer │
  └───┬───┘  └───┬───┘  └───┬───┘
      │          │          │
      ▼          ▼          ▼
   ┌─────┐   ┌─────┐    ┌─────┐
   │Logo │   │Card │    │Link │
   └─────┘   └─────┘    └─────┘

   All need theme! Prop drilling = 😫`,
    options: ['useState', 'useReducer', 'useContext', 'useMemo'],
    correctAnswer: 'useContext',
    hint: 'This is about accessing shared data without "prop drilling" through component layers.',
    explanation: 'useContext lets you subscribe to React context and access values provided by a parent component, avoiding prop drilling.',
    codeExample: `// Create context
const ThemeContext = createContext('light');

// Provide it
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// Consume it anywhere
const theme = useContext(ThemeContext);`
  },
  {
    id: 'useMemo-1',
    category: 'Beginner • Performance',
    problem: 'I have a function that filters and sorts a large list of 10,000 items. This calculation runs on every render and makes my app slow.',
    visual: `Every Render:
┌──────────────────────────────────┐
│  10,000 items                    │
│      │                           │
│      ▼                           │
│  filter() ─── 🐢 Slow!           │
│      │                           │
│      ▼                           │
│  sort() ─── 🐢 Even slower!      │
│      │                           │
│      ▼                           │
│  Filtered list                   │
└──────────────────────────────────┘

Need to CACHE the result and only
recalculate when data changes!`,
    problemCode: `function ProductList({ products, filters }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // ❌ This runs on EVERY render!
  // Even when only searchTerm changes
  const filteredProducts = products
    .filter(p => p.category === filters.category)
    .filter(p => p.price >= filters.minPrice)
    .sort((a, b) => a.name.localeCompare(b.name));
  
  // Typing in search box causes re-render
  // Which recalculates filteredProducts! 🐢
  
  return (
    <div>
      <input 
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredProducts.map(p => <Product key={p.id} {...p} />)}
    </div>
  );
}`,
    options: ['useEffect', 'useRef', 'useMemo', 'useCallback'],
    correctAnswer: 'useMemo',
    hint: 'You want to cache the RESULT of an expensive calculation so it doesn\'t run every time.',
    explanation: 'useMemo memoizes the result of an expensive calculation, only recomputing when its dependencies change.',
    codeExample: `const sortedList = useMemo(() => {
  return items
    .filter(item => item.active)
    .sort((a, b) => a.name.localeCompare(b.name));
}, [items]); // Only recalculate when items change`
  },
  {
    id: 'useCallback-1',
    category: 'Beginner • Performance',
    problem: 'I\'m passing an onClick handler to a memoized child component, but the child keeps re-rendering because the function reference changes every time.',
    visual: `Parent renders:
    
    Render 1: handleClick = fn#1
    Render 2: handleClick = fn#2  ◄─ Different!
    Render 3: handleClick = fn#3  ◄─ Different!
    
         │
         ▼
    ┌─────────────────────────┐
    │    MemoizedChild        │
    │    onClick={handleClick}│
    └─────────────────────────┘
    
    Re-renders every time! 😫
    Even though function logic is SAME
    
    Need STABLE function reference`,
    problemCode: `// Current code (causing re-renders)
function Parent() {
  const [count, setCount] = useState(0);
  
  // ❌ This function is recreated every render!
  const handleClick = (id) => {
    console.log('Clicked item:', id);
  };
  
  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      
      {/* MemoizedChild re-renders when Parent renders */}
      <MemoizedChild onClick={handleClick} />
    </>
  );
}

const MemoizedChild = React.memo(({ onClick }) => {
  console.log('Child rendered!'); // Logs on EVERY parent render!
  return <button onClick={onClick}>Click me</button>;
});`,
    options: ['useEffect', 'useRef', 'useMemo', 'useCallback'],
    correctAnswer: 'useCallback',
    hint: 'You need to keep the FUNCTION reference stable, not the result of a calculation.',
    explanation: 'useCallback memoizes a function definition, preventing it from being recreated on every render. This is useful when passing callbacks to optimized child components.',
    codeExample: `const handleClick = useCallback((id) => {
  console.log('Clicked:', id);
}, []); // Stable function reference

<MemoizedChild onClick={handleClick} />`
  },
  {
    id: 'useReducer-1',
    category: 'Beginner • State',
    problem: 'I have a form with 10 fields, and I need to manage validation states, loading states, and submission status. Using multiple useState calls is becoming messy.',
    visual: `Current state (messy):

useState(name)      useState(email)
useState(nameErr)   useState(emailErr)  
useState(phone)     useState(phoneErr)
useState(loading)   useState(success)
     ... 10 more ...

        │
        ▼

Better approach:
┌──────────────────────────────┐
│     Single State Object      │
│  {                           │
│    values: {...},            │
│    errors: {...},            │
│    isSubmitting: false       │
│  }                           │
└──────────────────────────────┘
        │
        ▼
dispatch({ type: 'SET_FIELD' })`,
    problemCode: `function RegistrationForm() {
  // ❌ Too many useState calls!
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');
  
  // Messy! Hard to track what's happening
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setNameError('');
    setEmailError('');
    // ... reset all errors, then validate, then submit
    // This is a nightmare to maintain! 😫
  };
}`,
    options: ['useState', 'useReducer', 'useContext', 'useMemo'],
    correctAnswer: 'useReducer',
    hint: 'Think about a pattern where state changes are described by "actions" and handled by a central logic.',
    explanation: 'useReducer is ideal for complex state logic with multiple sub-values, or when the next state depends on the previous one. It uses the same pattern as Redux.',
    codeExample: `const [state, dispatch] = useReducer(formReducer, {
  values: {},
  errors: {},
  isSubmitting: false
});

// Update with actions
dispatch({ type: 'SET_FIELD', field: 'email', value: 'test@example.com' });
dispatch({ type: 'SUBMIT' });`
  },
  {
    id: 'useEffect-2',
    category: 'Beginner • Cleanup',
    problem: 'I\'m setting up a WebSocket connection when my chat component mounts. I need to make sure the connection is properly closed when the component unmounts to prevent memory leaks.',
    visual: `Component Mounts:
┌──────────────┐     ┌──────────────┐
│  ChatRoom    │ ◄──►│   WebSocket  │
│  Component   │     │   Server     │
└──────────────┘     └──────────────┘
       │
       │  User navigates away...
       ▼
Component Unmounts:
┌──────────────┐     ┌──────────────┐
│   (gone)     │  ?  │   WebSocket  │
│              │     │   (still     │
│              │     │    open!)    │
└──────────────┘     └──────────────┘
                           │
                     MEMORY LEAK! 🚨
                     
Need CLEANUP function to close socket!`,
    options: ['useState', 'useEffect', 'useRef', 'useLayoutEffect'],
    correctAnswer: 'useEffect',
    hint: 'You need a cleanup mechanism that runs when the component is removed from the DOM.',
    explanation: 'useEffect can return a cleanup function that runs when the component unmounts or before the effect runs again. Perfect for subscriptions and connections.',
    codeExample: `useEffect(() => {
  const socket = new WebSocket('ws://chat-server');
  
  socket.onmessage = (event) => {
    // Handle messages
  };

  // Cleanup function
  return () => {
    socket.close();
  };
}, []);`
  },
  {
    id: 'useRef-2',
    category: 'Beginner • Mutable Values',
    problem: 'I need to track how many times a component has rendered for debugging, but I don\'t want this count to cause additional renders.',
    visual: `useState approach:

Render 1 ─► setCount(1) ─► Render 2
Render 2 ─► setCount(2) ─► Render 3
Render 3 ─► setCount(3) ─► Render 4
        ...INFINITE LOOP! 🔄

Need a value that:
✅ Persists across renders
✅ Can be updated
❌ Does NOT trigger re-renders

┌─────────────────────────┐
│   ref.current = 5       │
│   (update silently)     │
│   No re-render!         │
└─────────────────────────┘`,
    options: ['useState', 'useEffect', 'useRef', 'useMemo'],
    correctAnswer: 'useRef',
    hint: 'You need a value that persists across renders but doesn\'t trigger re-renders when changed.',
    explanation: 'useRef creates a mutable container that persists across renders. Unlike useState, changing ref.current does NOT trigger a re-render.',
    codeExample: `const renderCount = useRef(0);

useEffect(() => {
  renderCount.current += 1;
  console.log('Render count:', renderCount.current);
});`
  },
  {
    id: 'useLayoutEffect-1',
    category: 'Beginner • DOM',
    problem: 'I need to measure a DOM element\'s dimensions and position to create a tooltip, but I\'m getting flickering because the measurement happens after paint.',
    visual: `useEffect timing (problem):

DOM Update ─► Browser Paint ─► useEffect
                   │
                   ▼
            User sees tooltip at (0,0)
                   │
                   ▼
            Then jumps to correct position
            
            FLICKER! 👀
            
─────────────────────────────────────

Need to measure BEFORE paint:

DOM Update ─► measurement ─► Browser Paint
                                  │
                                  ▼
                          Tooltip in right place
                          
                          No flicker! ✅`,
    problemCode: `function Tooltip({ targetRef, content }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // ❌ useEffect runs AFTER paint
  useEffect(() => {
    const rect = targetRef.current.getBoundingClientRect();
    setPosition({ x: rect.right + 10, y: rect.top });
  }, []);
  
  // User sees:
  // 1. Tooltip at (0, 0) for a split second
  // 2. Tooltip jumps to correct position
  // = FLICKER! 👀
  
  return (
    <div style={{ 
      position: 'fixed',
      left: position.x,
      top: position.y 
    }}>
      {content}
    </div>
  );
}`,
    options: ['useEffect', 'useLayoutEffect', 'useRef', 'useMemo'],
    correctAnswer: 'useLayoutEffect',
    hint: 'You need to run your effect BEFORE the browser paints, synchronously after DOM mutations.',
    explanation: 'useLayoutEffect fires synchronously after all DOM mutations but before the browser paints. Use it for DOM measurements that need to happen before visual updates.',
    codeExample: `const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
const buttonRef = useRef(null);

useLayoutEffect(() => {
  const rect = buttonRef.current.getBoundingClientRect();
  setTooltipPos({ x: rect.right, y: rect.top });
}, []);`
  },
  {
    id: 'useState-2',
    category: 'Beginner • State',
    problem: 'I have a toggle button that switches between showing and hiding a sidebar. I need to track whether the sidebar is open or closed.',
    visual: `┌──────────────────────────────────────┐
│  [☰]                                 │
│   │                                  │
│   ▼                                  │
│ ┌─────────┐  ┌───────────────────┐   │
│ │         │  │                   │   │
│ │ Sidebar │  │    Main Content   │   │
│ │         │  │                   │   │
│ │  open   │  │                   │   │
│ │         │  │                   │   │
│ └─────────┘  └───────────────────┘   │
└──────────────────────────────────────┘

Simple toggle: open ↔ closed
Just need: true or false`,
    options: ['useState', 'useReducer', 'useRef', 'useContext'],
    correctAnswer: 'useState',
    hint: 'This is simple boolean state - open or closed.',
    explanation: 'useState is perfect for simple state like booleans, numbers, or strings. Don\'t overcomplicate it with useReducer for basic toggles.',
    codeExample: `const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)}>
  Toggle Sidebar
</button>

{isOpen && <Sidebar />}`
  },
  {
    id: 'useContext-2',
    category: 'Beginner • Context',
    problem: 'I have user authentication data (user ID, email, permissions) that\'s needed by components deep in my component tree like profile, settings, and dashboard.',
    visual: `Without Context (prop drilling 😫):

App ──user──► Layout ──user──► Dashboard
                                    │
                              ──user──► Settings
                                           │
                                     ──user──► Profile

With Context (clean! ✨):

    ┌─────────────────────────────┐
    │     AuthContext.Provider    │
    │     value={{ user, logout }}│
    └─────────────────────────────┘
         │           │          │
    ┌────┘           │          └────┐
    ▼                ▼               ▼
 Header          Dashboard       Settings
    │                               │
    ▼                               ▼
 UserMenu                       Profile

Any component can access user! 🎉`,
    options: ['useState', 'useReducer', 'useContext', 'props'],
    correctAnswer: 'useContext',
    hint: 'Multiple distant components need the same data without passing it through every intermediate component.',
    explanation: 'useContext is ideal for "global" data like authentication, theme, or locale that many components at different nesting levels need to access.',
    codeExample: `// AuthContext.js
export const AuthContext = createContext(null);

// App.js
<AuthContext.Provider value={{ user, logout }}>
  <Dashboard />
</AuthContext.Provider>

// DeepNestedComponent.js
const { user, logout } = useContext(AuthContext);`
  },

  // ===================================
  // INTERMEDIATE LEVEL (13-24)
  // ===================================
  {
    id: 'race-condition',
    category: 'Intermediate • Async',
    problem: 'Users can quickly switch between profile tabs. Each tab fetches different data, but sometimes old responses arrive after new ones, showing stale data.',
    visual: `User clicks Tab A → Tab B → Tab C quickly:

Tab A request ─────────────────────► Response A
Tab B request ─────────► Response B
Tab C request ──► Response C

Timeline:
─────────────────────────────────────►
  A sent    B sent   C sent
                     C arrives ✓
               B arrives (STALE! ❌)
                              A arrives (STALE! ❌)

Problem: Last click was C, but A arrived last!
Need to IGNORE outdated responses.`,
    problemCode: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ❌ BUG: No way to cancel stale requests!
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data); // Always sets, even if outdated!
      });
  }, [userId]);

  return <div>{user?.name}</div>;
}

// User quickly clicks: User 1 → User 2 → User 3
// Request for User 1 takes 3s (slow server)
// Request for User 3 takes 0.5s (fast)
// Result: Shows User 1 because it arrived LAST! 😱`,
    options: ['useState', 'useEffect', 'useRef', 'useMemo'],
    correctAnswer: 'useEffect',
    hint: 'You need a cleanup function that can mark previous requests as "cancelled" so their responses are ignored.',
    explanation: 'useEffect cleanup can set a flag to ignore stale responses. When the effect re-runs (user switches tabs), the cleanup marks the old request as cancelled.',
    codeExample: `useEffect(() => {
  let isCancelled = false;
  
  fetch(\`/api/user/\${userId}\`)
    .then(res => res.json())
    .then(data => {
      if (!isCancelled) {
        setUser(data); // Only update if not cancelled
      }
    });

  return () => {
    isCancelled = true; // Cancel on cleanup
  };
}, [userId]);`
  },
  {
    id: 'stale-closure',
    category: 'Intermediate • Closures',
    problem: 'I have a setInterval that logs the count every second, but it always logs 0 even after I click the increment button multiple times.',
    visual: `Timeline:
───────────────────────────────────►
  Effect runs      count=1  count=2
  (count=0)         ↑         ↑
      │            click    click
      │
      └─ Closure "remembers" count=0
         forever! Stale closure! 🔒

Need a way to always get LATEST value`,
    problemCode: `function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // ❌ BUG: This always logs 0!
      console.log('Count is:', count);
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []); // Empty deps = runs once, captures count=0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}

// Console output (even after clicking 5 times):
// Count is: 0
// Count is: 0
// Count is: 0`,
    options: ['useState with callback', 'useRef', 'useMemo', 'useReducer'],
    correctAnswer: 'useRef',
    hint: 'You need a container that always holds the latest value without re-running the effect.',
    explanation: 'useRef creates a mutable container. Storing count in a ref and updating it on every render ensures the interval always reads the latest value.',
    codeExample: `const [count, setCount] = useState(0);
const countRef = useRef(count);

// Keep ref in sync with state
useEffect(() => {
  countRef.current = count;
}, [count]);

useEffect(() => {
  const id = setInterval(() => {
    console.log(countRef.current); // Always latest!
  }, 1000);
  return () => clearInterval(id);
}, []);`
  },
  {
    id: 'debounce-search',
    category: 'Intermediate • Performance',
    problem: 'I have a search input that calls an API on every keystroke. Typing "react" sends 5 API calls (r, re, rea, reac, react). I need to wait until the user stops typing.',
    visual: `Without debounce:
User types: "react"

r ──► API call
re ──► API call
rea ──► API call
reac ──► API call
react ──► API call

5 API calls! 😫 Server overload!

─────────────────────────────────────

With debounce (300ms delay):
User types: "react"

r ──┐
re ──┤ (cancel previous)
rea ──┤ (cancel previous)
reac ──┤ (cancel previous)
react ──┴── wait 300ms ──► 1 API call ✅`,
    problemCode: `function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // ❌ API call on EVERY keystroke!
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
    
    // This fires for 'r', 're', 'rea', 'reac', 'react'
    const data = await fetch(\`/api/search?q=\${value}\`);
    setResults(await data.json());
  };

  return (
    <input 
      value={query}
      onChange={handleSearch}
      placeholder="Search..."
    />
  );
}

// Network tab shows 5 requests! 😱`,
    options: ['useState', 'useEffect', 'useMemo', 'useCallback'],
    correctAnswer: 'useEffect',
    hint: 'You need a cleanup function that cancels the previous timeout when the search term changes.',
    explanation: 'useEffect cleanup is perfect for debouncing. Set a timeout in the effect, and clear it in cleanup. Only the last timeout (after typing stops) will fire.',
    codeExample: `const [searchTerm, setSearchTerm] = useState('');
const [results, setResults] = useState([]);

useEffect(() => {
  const timeoutId = setTimeout(() => {
    fetch(\`/api/search?q=\${searchTerm}\`)
      .then(res => res.json())
      .then(data => setResults(data));
  }, 300);

  return () => clearTimeout(timeoutId); // Cancel on new keystroke
}, [searchTerm]);`
  },
  {
    id: 'previous-value',
    category: 'Intermediate • State',
    problem: 'I\'m building an animation that needs to know the previous value to calculate the transition direction (e.g., sliding left vs right).',
    visual: `Current page: 3

User clicks "Next": page becomes 4
   └─ Need to know previous was 3
   └─ Slide animation: LEFT ◄───

User clicks "Back": page becomes 3  
   └─ Need to know previous was 4
   └─ Slide animation: ───► RIGHT

Need to store previous value
WITHOUT causing extra renders`,
    options: ['useState', 'useEffect', 'useRef', 'useMemo'],
    correctAnswer: 'useRef',
    hint: 'You need to store the previous value after each render without triggering another render.',
    explanation: 'useRef can store the previous value without causing re-renders. Update the ref after each render to always have access to the last value.',
    codeExample: `function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current; // Returns previous value
}

// Usage
const [page, setPage] = useState(1);
const prevPage = usePrevious(page);
const direction = page > prevPage ? 'left' : 'right';`
  },
  {
    id: 'controlled-input',
    category: 'Intermediate • Forms',
    problem: 'I have a text input that needs to format the user\'s input in real-time (e.g., adding dashes to a phone number as they type).',
    visual: `User types: 1234567890

Without formatting:    With formatting:
┌─────────────────┐   ┌─────────────────┐
│  1234567890     │   │  123-456-7890   │
└─────────────────┘   └─────────────────┘

Each keystroke:
1. Capture raw input
2. Format it (add dashes)
3. Display formatted version
4. Store for submission

Need controlled input with state`,
    options: ['useState', 'useRef', 'useEffect', 'useMemo'],
    correctAnswer: 'useState',
    hint: 'You need React to control the input value so you can transform it on every change.',
    explanation: 'useState makes the input "controlled" - React manages the value. This lets you intercept and format the input before displaying it.',
    codeExample: `const [phone, setPhone] = useState('');

const formatPhone = (value) => {
  const digits = value.replace(/\\D/g, '');
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return \`\${digits.slice(0,3)}-\${digits.slice(3)}\`;
  return \`\${digits.slice(0,3)}-\${digits.slice(3,6)}-\${digits.slice(6,10)}\`;
};

<input 
  value={phone}
  onChange={(e) => setPhone(formatPhone(e.target.value))}
/>`
  },
  {
    id: 'abort-fetch',
    category: 'Intermediate • Async',
    problem: 'When my component unmounts while a fetch is in progress, I get a "Can\'t perform a React state update on an unmounted component" warning.',
    visual: `Component mounted, fetch starts...

┌──────────────┐         ┌──────────┐
│  Component   │ ──────► │   API    │
│              │         │  Server  │
└──────────────┘         └──────────┘
       │
       │ User navigates away (unmount)
       ▼
┌──────────────┐         ┌──────────┐
│   (gone)     │ ◄────── │ Response │
└──────────────┘         └──────────┘
       │
       │  setData(response) 
       ▼
  ⚠️ Warning: Can't update unmounted component!

Need to ABORT the fetch on unmount`,
    options: ['useState', 'useEffect', 'useRef', 'AbortController'],
    correctAnswer: 'useEffect',
    hint: 'The cleanup function can abort the fetch request using AbortController.',
    explanation: 'useEffect cleanup with AbortController properly cancels in-flight requests when the component unmounts, preventing state updates on unmounted components.',
    codeExample: `useEffect(() => {
  const controller = new AbortController();

  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => {
      if (err.name !== 'AbortError') {
        setError(err);
      }
    });

  return () => controller.abort(); // Cancel on unmount
}, []);`
  },
  {
    id: 'form-validation',
    category: 'Intermediate • Forms',
    problem: 'I have a multi-step form wizard. Each step needs to validate before proceeding, and I need to track which steps are complete, current step, and form data across all steps.',
    visual: `Step 1: Personal  →  Step 2: Address  →  Step 3: Payment
   ●                     ○                    ○

State needed:
├── currentStep: 1
├── completedSteps: [false, false, false]
├── formData: {
│     personal: { name, email },
│     address: { street, city },
│     payment: { card, cvv }
│   }
└── errors: { ... }

Complex state with interdependencies!
Multiple useState = messy
Actions: NEXT, BACK, SET_FIELD, VALIDATE`,
    options: ['useState', 'useReducer', 'useContext', 'useMemo'],
    correctAnswer: 'useReducer',
    hint: 'Complex state with multiple related fields and actions is better handled with a reducer pattern.',
    explanation: 'useReducer centralizes complex state logic. Actions describe what happened, and the reducer determines how state changes. Perfect for form wizards.',
    codeExample: `const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, 
        formData: { ...state.formData, [action.field]: action.value }
      };
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'VALIDATE':
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(formReducer, initialState);`
  },
  {
    id: 'resize-observer',
    category: 'Intermediate • Browser APIs',
    problem: 'I need to track a container\'s width to switch between mobile and desktop layouts, but CSS media queries aren\'t enough because the container\'s width depends on a dynamic sidebar.',
    visual: `┌──────────────────────────────────────────┐
│ Sidebar │       Main Content            │
│         │  ┌─────────────────────────┐  │
│  200px  │  │   Container to watch    │  │
│         │  │   Width: ???            │  │
│         │  └─────────────────────────┘  │
└──────────────────────────────────────────┘

Sidebar can collapse/expand
Container width changes!

Need: ResizeObserver + cleanup
Subscribe on mount, cleanup on unmount`,
    options: ['useState', 'useEffect', 'useRef', 'useLayoutEffect'],
    correctAnswer: 'useEffect',
    hint: 'You need to subscribe to ResizeObserver when mounted and disconnect when unmounted.',
    explanation: 'useEffect is perfect for browser API subscriptions. Set up the ResizeObserver in the effect and disconnect in the cleanup function.',
    codeExample: `const containerRef = useRef(null);
const [width, setWidth] = useState(0);

useEffect(() => {
  const element = containerRef.current;
  const observer = new ResizeObserver((entries) => {
    setWidth(entries[0].contentRect.width);
  });
  
  observer.observe(element);
  
  return () => observer.disconnect(); // Cleanup!
}, []);`
  },
  {
    id: 'local-storage-sync',
    category: 'Intermediate • Persistence',
    problem: 'I want to persist user preferences (like theme, language) to localStorage and sync them back when the page reloads.',
    visual: `Initial Load:
┌─────────────────┐      ┌─────────────┐
│   Component     │ ◄──  │ localStorage│
│   theme: ???    │      │ theme: dark │
└─────────────────┘      └─────────────┘

User changes theme:
┌─────────────────┐      ┌─────────────┐
│   Component     │ ──►  │ localStorage│
│   theme: light  │      │ theme: light│
└─────────────────┘      └─────────────┘

Need:
1. Read from localStorage on mount
2. Write to localStorage on change`,
    options: ['useState only', 'useEffect + useState', 'useRef', 'useMemo'],
    correctAnswer: 'useEffect + useState',
    hint: 'You need state for the current value, and an effect to sync with localStorage.',
    explanation: 'useState holds the current value, while useEffect syncs it from localStorage on mount and writes changes back when the value updates.',
    codeExample: `const [theme, setTheme] = useState(() => {
  // Initialize from localStorage
  return localStorage.getItem('theme') || 'light';
});

useEffect(() => {
  // Sync to localStorage when theme changes
  localStorage.setItem('theme', theme);
}, [theme]);`
  },
  {
    id: 'derived-state',
    category: 'Intermediate • State',
    problem: 'I have a list of cart items and need to show the total price. I\'m tempted to store the total in state, but I\'ve heard that\'s an anti-pattern.',
    visual: `Cart items:
├── { name: "Shirt", price: 25, qty: 2 }
├── { name: "Pants", price: 50, qty: 1 }
└── { name: "Shoes", price: 80, qty: 1 }

❌ Anti-pattern:
const [items, setItems] = useState([...]);
const [total, setTotal] = useState(180);
// Must manually sync total when items change!

✅ Better:
const total = ??? (calculate from items)

Derived state = computed, not stored`,
    options: ['useState', 'useEffect', 'useMemo', 'useReducer'],
    correctAnswer: 'useMemo',
    hint: 'The total can be calculated from items. You just need to avoid recalculating on every render.',
    explanation: 'useMemo computes derived values efficiently. The total is derived from items, so calculate it with useMemo instead of storing in separate state.',
    codeExample: `const [items, setItems] = useState([...]);

// Derived state - calculated, not stored
const total = useMemo(() => {
  return items.reduce((sum, item) => 
    sum + item.price * item.qty, 0
  );
}, [items]); // Only recalculate when items change`
  },
  {
    id: 'imperative-handle',
    category: 'Intermediate • Refs',
    problem: 'I built a custom video player component. The parent component needs to call play(), pause(), and seek() methods on my video player.',
    visual: `Parent Component
       │
       │ ref={videoRef}
       │
       ▼
┌──────────────────────────┐
│     VideoPlayer          │
│  ┌────────────────────┐  │
│  │                    │  │
│  │     <video>        │  │
│  │                    │  │
│  └────────────────────┘  │
│  [▶] [⏸] [──●────] 2:30  │
└──────────────────────────┘

Parent wants to call:
videoRef.current.play()
videoRef.current.seek(30)

Need to expose custom methods via ref`,
    options: ['useRef', 'useImperativeHandle', 'useCallback', 'forwardRef only'],
    correctAnswer: 'useImperativeHandle',
    hint: 'You need to customize what the parent sees when it accesses the ref.',
    explanation: 'useImperativeHandle lets you customize the ref value exposed to parent components. Combined with forwardRef, you can expose specific methods.',
    codeExample: `const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    seek: (time) => { videoRef.current.currentTime = time; }
  }));

  return <video ref={videoRef} {...props} />;
});

// Parent can now call:
videoRef.current.play();`
  },
  {
    id: 'event-listener',
    category: 'Intermediate • Events',
    problem: 'I need to listen for keyboard shortcuts (like Ctrl+S to save) globally, but the event listener keeps using stale state values.',
    visual: `useEffect(() => {
  const handleKey = (e) => {
    if (e.ctrlKey && e.key === 's') {
      save(document);  // Uses stale 'document'!
    }
  };
  
  window.addEventListener('keydown', handleKey);
  return () => window.removeEventListener('keydown', handleKey);
}, []); // Empty deps = stale closure!

Problem: 'document' from first render
         is captured forever!

Solution: Store latest in ref`,
    options: ['useState', 'useEffect only', 'useRef + useEffect', 'useCallback'],
    correctAnswer: 'useRef + useEffect',
    hint: 'Use a ref to always access the latest values inside the event handler.',
    explanation: 'Store changing values (like document) in a ref. The event listener reads from the ref, which always has the latest value.',
    codeExample: `const documentRef = useRef(document);

// Keep ref updated
useEffect(() => {
  documentRef.current = document;
}, [document]);

useEffect(() => {
  const handleKey = (e) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      save(documentRef.current); // Always latest!
    }
  };
  
  window.addEventListener('keydown', handleKey);
  return () => window.removeEventListener('keydown', handleKey);
}, []);`
  },

  // ===================================
  // ADVANCED LEVEL (25-35)
  // ===================================
  {
    id: 'optimistic-update',
    category: 'Advanced • UX',
    problem: 'When users like a post, there\'s a visible delay before the like count updates. I want to update the UI instantly, then sync with the server (and rollback if it fails).',
    visual: `Normal flow (slow UX):
Click ❤️  ──► API call ──► Wait... ──► Update UI
                              │
                         User waits! 😫

Optimistic update (instant UX):
Click ❤️  ──► Update UI instantly ──► API call
                    │                     │
               User happy! 😊        If fails:
                                     Rollback UI

Need to:
1. Store previous state (for rollback)
2. Update UI immediately
3. Sync with server
4. Handle failure`,
    options: ['useState only', 'useState + useRef', 'useReducer', 'useMutation'],
    correctAnswer: 'useState + useRef',
    hint: 'You need state for the UI and a ref to store the previous value for potential rollback.',
    explanation: 'useState updates the UI optimistically, while useRef stores the previous value. If the API fails, restore from the ref.',
    codeExample: `const [likes, setLikes] = useState(post.likes);
const previousLikes = useRef(likes);

const handleLike = async () => {
  previousLikes.current = likes; // Store for rollback
  setLikes(likes + 1);           // Optimistic update
  
  try {
    await api.likePost(postId);
  } catch (error) {
    setLikes(previousLikes.current); // Rollback!
    toast.error('Failed to like post');
  }
};`
  },
  {
    id: 'infinite-scroll',
    category: 'Advanced • Performance',
    problem: 'I\'m building an infinite scroll feed. I need to detect when the user scrolls near the bottom, then fetch more posts, while avoiding duplicate fetches.',
    visual: `┌─────────────────────────┐
│  Post 1                 │
│  Post 2                 │
│  Post 3                 │
│  Post 4                 │ ◄─ Viewport
│  Post 5                 │
├─────────────────────────┤
│  Loading indicator      │ ◄─ When this becomes
│                         │    visible, fetch more!
└─────────────────────────┘

Challenges:
1. Detect intersection (sentinel element)
2. Prevent duplicate fetches while loading
3. Cleanup observer on unmount
4. Handle pagination cursor`,
    options: ['useEffect + useState', 'useRef + useCallback', 'useEffect + useRef + useState', 'useMemo'],
    correctAnswer: 'useEffect + useRef + useState',
    hint: 'You need IntersectionObserver (effect + ref for the sentinel element) and state to track loading/page.',
    explanation: 'Combine useEffect for the observer lifecycle, useRef for the sentinel element, and useState for loading state and page cursor.',
    codeExample: `const [posts, setPosts] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);
const sentinelRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !loading) {
        setPage(p => p + 1);
      }
    },
    { threshold: 0.1 }
  );

  if (sentinelRef.current) {
    observer.observe(sentinelRef.current);
  }

  return () => observer.disconnect();
}, [loading]);

// Fetch when page changes
useEffect(() => {
  fetchPosts(page).then(newPosts => 
    setPosts(prev => [...prev, ...newPosts])
  );
}, [page]);`
  },
  {
    id: 'context-selector',
    category: 'Advanced • Performance',
    problem: 'My app uses Context for global state, but every tiny state change re-renders ALL consuming components, even ones that don\'t use the changed value.',
    visual: `AuthContext = { user, theme, notifications }

            ┌──────────────────────┐
            │   AuthContext.       │
            │   Provider           │
            └──────────────────────┘
                  │   │   │
        ┌─────────┘   │   └─────────┐
        ▼             ▼             ▼
   ┌─────────┐  ┌──────────┐  ┌───────────┐
   │ Header  │  │ Settings │  │  Badge    │
   │(user)   │  │(theme)   │  │(notifs)   │
   └─────────┘  └──────────┘  └───────────┘

notifications changes:
ALL THREE re-render! Even Header & Settings!

Solution: Split contexts or memoize consumers`,
    options: ['useMemo in Context', 'Split into multiple Contexts', 'useCallback', 'React.memo only'],
    correctAnswer: 'Split into multiple Contexts',
    hint: 'Each piece of state that changes independently should be in its own context.',
    explanation: 'Split your context by update frequency. Components only subscribe to the contexts they need, preventing unnecessary re-renders.',
    codeExample: `// Instead of one big context, split by concern:
const UserContext = createContext(null);
const ThemeContext = createContext('light');
const NotificationContext = createContext([]);

// Now Header only subscribes to UserContext
function Header() {
  const user = useContext(UserContext);
  // Won't re-render when notifications change!
}

// Badge only subscribes to NotificationContext
function Badge() {
  const notifications = useContext(NotificationContext);
}`
  },
  {
    id: 'custom-hook-composition',
    category: 'Advanced • Patterns',
    problem: 'I\'m repeating the same fetch logic (loading, error, data, refetch) across 15 components. I need to extract this into a reusable solution.',
    visual: `Component A:              Component B:
const [data, setData]     const [users, setUsers]
const [loading, ...]      const [loading, ...]
const [error, ...]        const [error, ...]

useEffect(() => {         useEffect(() => {
  fetch(...)                fetch(...)
  ...                       ...
}, [])                    }, [])

SAME PATTERN everywhere! 😫

Extract into: useFetch(url)
Returns: { data, loading, error, refetch }`,
    options: ['Higher Order Component', 'Custom Hook', 'Context API', 'render props'],
    correctAnswer: 'Custom Hook',
    hint: 'Custom hooks let you extract and reuse stateful logic between components.',
    explanation: 'Custom hooks are the React way to share stateful logic. They can use other hooks and return whatever the consuming component needs.',
    codeExample: `function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = useCallback(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  useEffect(() => { refetch(); }, [refetch]);

  return { data, loading, error, refetch };
}

// Usage in any component:
const { data, loading, error } = useFetch('/api/users');`
  },
  {
    id: 'transition-api',
    category: 'Advanced • React 18+',
    problem: 'I have a search filter that filters 10,000 items. Typing feels laggy because each keystroke blocks the UI while filtering.',
    visual: `User types "r":
┌─────────────────────────────────────┐
│ [r_______________]  ← Input blocked!│
│                                     │
│  Filtering 10,000 items...          │
│  🐢 UI feels frozen                 │
└─────────────────────────────────────┘

With transitions:
┌─────────────────────────────────────┐
│ [re______________]  ← Input smooth! │
│                                     │
│  Still showing old results          │
│  (filtering in background)          │
│  🚀 UI stays responsive             │
└─────────────────────────────────────┘

Separate URGENT updates from NON-URGENT`,
    options: ['useMemo', 'useTransition', 'useCallback', 'Web Worker'],
    correctAnswer: 'useTransition',
    hint: 'React 18\'s Concurrent Features let you mark some updates as non-urgent.',
    explanation: 'useTransition marks state updates as non-urgent, allowing urgent updates (like input) to interrupt them. The UI stays responsive.',
    codeExample: `const [searchTerm, setSearchTerm] = useState('');
const [filteredItems, setFilteredItems] = useState(items);
const [isPending, startTransition] = useTransition();

const handleChange = (e) => {
  const value = e.target.value;
  setSearchTerm(value);  // Urgent: update input immediately
  
  startTransition(() => {
    // Non-urgent: can be interrupted
    setFilteredItems(items.filter(item => 
      item.name.includes(value)
    ));
  });
};

// Show loading state while filtering
{isPending && <Spinner />}`
  },
  {
    id: 'deferred-value',
    category: 'Advanced • React 18+',
    problem: 'I\'m passing a search term to a heavy child component. I want the input to update instantly while the child shows a slightly stale value during typing.',
    visual: `              ┌─────────────────────┐
              │ <SearchInput       │
searchTerm ──►│  value={searchTerm}│  ← Instant!
              └─────────────────────┘
                        │
                        │ What about this?
                        ▼
              ┌─────────────────────┐
              │ <HeavyResultsList   │
   ??? ──────►│  searchTerm={???}  │  ← Can be delayed
              └─────────────────────┘

Want child to use "deferred" version
that can lag behind during typing`,
    options: ['useMemo', 'useTransition', 'useDeferredValue', 'useRef'],
    correctAnswer: 'useDeferredValue',
    hint: 'You need a version of the value that can lag behind the actual value during urgent updates.',
    explanation: 'useDeferredValue returns a deferred version of a value. During urgent updates, it returns the old value, letting heavy components skip re-renders.',
    codeExample: `const [searchTerm, setSearchTerm] = useState('');
const deferredSearchTerm = useDeferredValue(searchTerm);

// Input uses current value (instant)
<input 
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

// Heavy list uses deferred value (can lag)
<HeavyResultsList searchTerm={deferredSearchTerm} />

// Show stale indicator
const isStale = searchTerm !== deferredSearchTerm;
{isStale && <span>Updating...</span>}`
  },
  {
    id: 'suspense-data',
    category: 'Advanced • React 18+',
    problem: 'I want to show a loading skeleton while data is being fetched, using React\'s declarative Suspense pattern instead of manual loading states.',
    visual: `Traditional (imperative):
if (loading) return <Skeleton />;
if (error) return <Error />;
return <Content data={data} />;

With Suspense (declarative):
<Suspense fallback={<Skeleton />}>
  <Content />  ← This "suspends" while loading
</Suspense>

Content fetches data and "suspends"
until ready. Suspense shows fallback.

Need: Hook that integrates with Suspense`,
    options: ['useEffect + useState', 'useSuspenseQuery (from library)', 'useMemo', 'useContext'],
    correctAnswer: 'useSuspenseQuery (from library)',
    hint: 'Suspense for data fetching requires a hook that knows how to "suspend" - typically from React Query or similar.',
    explanation: 'Libraries like TanStack Query provide useSuspenseQuery that integrates with React Suspense. It throws a Promise to trigger the Suspense boundary.',
    codeExample: `import { useSuspenseQuery } from '@tanstack/react-query';

function UserProfile({ userId }) {
  // This "suspends" until data is ready
  const { data: user } = useSuspenseQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });
  
  // No loading check needed - we only render when ready
  return <div>{user.name}</div>;
}

// Parent wraps with Suspense
<Suspense fallback={<ProfileSkeleton />}>
  <UserProfile userId={1} />
</Suspense>`
  },
  {
    id: 'useId-accessibility',
    category: 'Advanced • Accessibility',
    problem: 'I have a reusable FormField component that needs unique IDs for input/label pairs. Using Math.random() causes hydration mismatches in SSR.',
    visual: `Server renders:
<label htmlFor="field-abc123">Name</label>
<input id="field-abc123" />

Client hydrates:
<label htmlFor="field-xyz789">Name</label>  
<input id="field-xyz789" />  ← Different ID!

HYDRATION MISMATCH! 💥

Math.random() = different on server vs client
Need stable, unique IDs that match SSR/CSR`,
    options: ['useState with uuid', 'useRef with counter', 'useId', 'useMemo'],
    correctAnswer: 'useId',
    hint: 'React 18 introduced a hook specifically for generating stable, hydration-safe unique IDs.',
    explanation: 'useId generates unique IDs that are stable across server and client renders, solving the hydration mismatch problem.',
    codeExample: `function FormField({ label, ...props }) {
  const id = useId();
  
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
}

// Multiple instances get unique, stable IDs:
<FormField label="Email" />    {/* id="r:1" */}
<FormField label="Password" /> {/* id="r:2" */}`
  },
  {
    id: 'sync-external-store',
    category: 'Advanced • External State',
    problem: 'I\'m integrating with a third-party state management library that doesn\'t use React. I need to subscribe to its changes and trigger re-renders safely.',
    visual: `External Store (not React-aware):
┌────────────────────────────────┐
│  store = {                     │
│    state: { count: 0 },        │
│    subscribe: (callback) => {} │
│    getSnapshot: () => state    │
│  }                             │
└────────────────────────────────┘
              │
              │ How to connect safely?
              ▼
┌────────────────────────────────┐
│  React Component               │
│  needs to re-render when       │
│  store.state changes           │
└────────────────────────────────┘

Problem: Manual subscription might miss
concurrent mode tearing issues`,
    options: ['useEffect + useState', 'useSyncExternalStore', 'useRef', 'useReducer'],
    correctAnswer: 'useSyncExternalStore',
    hint: 'React 18 has a hook designed specifically for subscribing to external stores safely.',
    explanation: 'useSyncExternalStore safely subscribes to external stores, handling concurrent mode edge cases like tearing.',
    codeExample: `import { useSyncExternalStore } from 'react';

// Connect to external store
function useStore(store, selector) {
  return useSyncExternalStore(
    store.subscribe,           // Subscribe function
    () => selector(store.getSnapshot()), // Get current value
    () => selector(store.getServerSnapshot()) // SSR
  );
}

// Usage
function Counter() {
  const count = useStore(externalStore, state => state.count);
  return <div>Count: {count}</div>;
}`
  },
  {
    id: 'error-boundary-reset',
    category: 'Advanced • Error Handling',
    problem: 'I have an error boundary that catches render errors. When the error is fixed (e.g., after a successful refetch), I need to clear the error and retry rendering the children.',
    visual: `Child Component throws during render:

┌─────────────────────────────────┐
│ ErrorBoundary                   │
│  ┌───────────────────────────┐  │
│  │ Child throws Error!       │  │
│  └───────────────────────────┘  │
│                                 │
│  Shows: "Something went wrong"  │
│         [Retry] button          │
└─────────────────────────────────┘

User clicks Retry:
1. Reset error boundary state
2. Re-render children
3. Fetch data again

Need a way to reset + provide new key`,
    options: ['useState in ErrorBoundary', 'useErrorBoundary hook', 'key prop + reset callback', 'useRef'],
    correctAnswer: 'key prop + reset callback',
    hint: 'Changing a component\'s key forces React to remount it, clearing error state.',
    explanation: 'Changing the ErrorBoundary\'s key remounts it, clearing caught errors. Provide a reset callback that increments a key or clears the error cause.',
    codeExample: `function App() {
  const [errorKey, setErrorKey] = useState(0);
  
  const handleReset = () => {
    setErrorKey(k => k + 1); // Force remount
    queryClient.refetchQueries(); // Retry fetch
  };

  return (
    <ErrorBoundary 
      key={errorKey}
      onReset={handleReset}
      fallback={({ reset }) => (
        <div>
          <p>Something went wrong</p>
          <button onClick={reset}>Retry</button>
        </div>
      )}
    >
      <DataComponent />
    </ErrorBoundary>
  );
}`
  },
  {
    id: 'memo-vs-usememo',
    category: 'Advanced • Performance',
    problem: 'I\'m confused about when to use React.memo vs useMemo. My child component receives an object prop and keeps re-rendering even with React.memo.',
    visual: `Parent:
const data = { name: "John" };  ← New object every render!

<MemoizedChild data={data} />  ← Re-renders anyway!

Why? React.memo does shallow compare:
{ name: "John" } === { name: "John" }  → FALSE
Objects are compared by reference!

┌─────────────────────────────────────┐
│ React.memo: Compares PROPS          │
│ useMemo: Creates STABLE REFERENCE   │
│                                     │
│ Need BOTH for objects!              │
└─────────────────────────────────────┘`,
    options: ['React.memo only', 'useMemo only', 'useMemo for prop + React.memo for child', 'useCallback'],
    correctAnswer: 'useMemo for prop + React.memo for child',
    hint: 'You need a stable reference (useMemo) for the object, AND memoization (React.memo) for the component.',
    explanation: 'useMemo stabilizes the object reference so shallow comparison passes. React.memo then skips re-rendering when props are shallowly equal.',
    codeExample: `// Parent: stabilize object with useMemo
const data = useMemo(() => ({ 
  name: user.name 
}), [user.name]);

<MemoizedChild data={data} />

// Child: skip re-render if props equal
const MemoizedChild = React.memo(({ data }) => {
  return <div>{data.name}</div>;
});

// Now MemoizedChild only re-renders when 
// user.name actually changes!`
  }
];
