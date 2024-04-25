# Advanced React

## Design Patterns

Component Patterns:

- Layout Components
- Container Components
- Controlled and Uncontrolled Components
- Higher order components
- Custom Hooks
- Functional Programming in React

More Paterns :

- Compound Components
- Observer Pattern

### 1. Layout Components

Layout Components are specialized components that focus on organizing all the components within a web page. They help maintain consistency and structure in your application's layout.

**Examples:**

- Split Screen: Divides the screen into multiple sections, often used for displaying different types of content side by side.
- List: Renders a list of items in a structured format, commonly used for navigation or displaying data.
- Modals: Displays content on top of the current page, typically used for dialogs, pop-ups, or notifications.

### 2. Container Components

Container Components are React components responsible for handling data loading and data management on behalf of their children components. They encapsulate data-related logic and provide it to their children as props.

**Example:**

```jsx
const ContainerComponent = () => {
  // Manage Data
  const [data, setData] = useState();

  useEffect(() => {
    // Data fetching logic
  }, []);

  return (
    // Pass data to children as props
    <ChildrenComponent data={data} />
  );
};
```

### 3. Controlled and Uncontrolled Components

Uncontrolled Components:

Uncontrolled components are those where the component itself manages its own internal state, and the data within the component is typically accessed only when specific events happen.

Example:

An uncontrolled form where values of two form inputs are known to the outside components only when the user triggers the submit event.

**Example:**

```jsx
const UncontrolledComponent = ({ onSubmit }) => {
  //state managment by component itself
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};


<>
  <UncontrolledComponent onSubmit={(data) => {...}}/>
</>;
```

Controlled Components:

Controlled components are components in which the parent component is responsible for managing the state, which is passed down to the control component. The parent component handles the state and controls the behavior of the controlled component.

```jsx
const ControlledComponent = ({ onSubmit, value, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

<>
  <ControlledComponent data={...} onSubmit={() => {...}} onChange={() => {...}}/>
</>;
```

##### Which approach controls or uncontrolled components should we prefer?

- In most cases, controlled components are the preferred choice. There are several reasons for this preference. First of all, control components tend to be more usable and easier to test with controlled components. We can easily set up the component with the desired state for testing purposes. This eliminates the need to manually manipulate the components and trigger events to examine its internal behaviour.

### 4. Higher Order Components

HOC - Higher order components are components that instead of directly returning JSX, return another component.

As you are probably aware, most components in React simply Return JSX, which represents the Dom elements to be rendered in their place. However, with higher order components, we introduce an additional layer instead of directly returning JSX hoc return another component that in turn returns JSX. To simplify the concept, remember that higher order components are essentially functions that return components.

Why would you want to create higher order components?
First, hoc enable us to share behavior among multiple components. This is similar to what we observed with container components, where different components were wrapped within the same container and exhibited similar behavior. Higher order components provide a means to achieve similar functionality for sharing the relative logic. Additionally, higher order components allow us to add extra functionality to existing components.

### 5. HOC

Custom hooks are hooks that we create by combining the basic hooks provided by React instead of repeating the same logic across multiple components, we encapsulate that logic into a custom hook.

```jsx
const useUsers = () => {
  const [users, setUsers] = useStaet([]);

  //load users fro server

  return users;
};

//For using them
const users = useUsers();
```

### 6. Functional Programming in React

Functional Programming is an approach to organizing code that emphasizes minimizing mutation and state change, utilizing pure functions independent of external data and treating functions as first class citizens.

Functional Programming Use-cases

1. Controlled components
2. Functioanl components
3. HOCs
4. Recursive components (The recursive pattern is simply or the recursive component, is a component that calls itself from inside itself.)
5. Partial components
6. Composition

### 7. Compound Components

- breaking down a component into several sub components, and then composing those sub components together in order to achieve the greater component.

### 8. Observer Pattern

- Whenever two components want to communicate they usually communicate via their parent component especially when they share the same state. But there are some situations where we need two components to communicate without including the parent component in the process. For example, whenever we have two components, like inside a counter and one of them wants to emit the a kind of event, you know, incrementing or decrementing the value. And there is another sibling component which listens to that event whenever the increment or decrement fires. It's going to update the counter value.

## Advanced Concepts and Hooks

#### 1. React Portals

#### 2. Forwarding refs

#### 3. Error Boundaries

- class components that are going to have a fallback component inside of them.

#### 4. Keys

#### 5. Event Listener

#### 6. useLayoutEffect

The normal use effect that we use has a kind of asynchronous behavior. Whenever it fires first, it tells the whole component to render, then it does the business it has to do.And then if that business, the task that it does in here, does change or does cause the application to the component to render, it will see that in some cases the lag. Based on some results done in the use effect that may cause some bad user experience.

useLayoutEffect - whenever it wants to fire first, it does the task that it has in its body. And when it's done, if we need to render it, the the component is going to rerender.

The power of use effect lies in that asynchronous like behavior that we said. But in some very rare cases, that usual use effect may cause some UI lags or some especially when you want to render some stuff based on the calculations. In those rare cases, this use layout effect can save you a lot because it's going to do some task based listening to a state or whatsoever. But usually you would definitely want to go with the normal use effect.

#### 7. useId

Case: click on label of input and we want to have cursor on them but it wont be so we need to give inputs and labe their id.
We cant use Math.random for the id even tho it will work cuz in case we have some server side rendering, okay, this page is being rendered on the server and sent to the client whenever the client refreshes, it's going to have different IDs and that is not going to work simply because the ID that is generated in the first place on the server is not the same as the newly generated ID on the client side.

In case if we have 2 element in 1 component and need to do different id we will do id={`${id}-name`} and `${id}-email`} thsn do several const id2 = useId()

#### 8. useCallback as Ref

What happens in case we have this use effect in place and the input is not mounted yet, so it is going to be null. The solution is in the code.
So the idea of using use callback in this way is that whenever you want to perform an action on an element right after it is rendered on the actual Dom, you can pass a use callback to that element like this and do whatever you want with it.

#### 8. useImperativeHandle

React is indeed emphasizing on the declarative way of programming and you should avoid the imperative programming as much as you can. But sometimes you need to do it like for example, when we need to do some kind of focusing, we have to use useRef. But a safe thing or a safe feature that you can have, which is a good practice, is sometimes you can even limit what the user or the ref that you attach to a component or to an element, what exactly it points to. For example, this ref that we are attaching to this input in here is completely attached to this input element and it has access to all the features of this input. But if you want to limit it, you can limit it. For example, you want it to only have access to the focus function of this input element, not all the things - you can come in here and by using a very specific hook that is called use imperative, we can actually define what exactly this ref in here can have access to. And it takes a first parameter, which is the actual ref that we are passing to the component. And then it takes another function that returns some objects.

#### 9. useDeferredValue

useDeferredValue is a React Hook that lets you defer updating a part of the UI.
useDeferredValue(value, initialValue?)

#### 10. useTransition

useTransition is a React Hook that lets you update the state without blocking the UI.
const [isPending, startTransition] = useTransition()

EX: buttons are freezed because the whole application is waiting for this render of the list under 1 button to be finished.

- useDeferredValue and useTransition are in use-deferred-value branch

#### 11. Async React Router

## Advanced Concepts and Hooks

#### 1. Using Element Prop

#### 2. Optimizing Context API

#### 3. Less useEffects

## General Architecture

public/
src/
├── api/
├── assets/
│ ├── fonts/
│ ├── images/
├── components/
│ ├──common/
│ ├──├──button/
│ ├── Newsletter/
│ ├──├── newsletter.jsx
│ ├──├── hook/
│ └── ...
├── config/
├── constans/
├── context/
├── helpers/
├── hooks/
├── intl/
├── layout/
├── services/
├── store/
├── styles/
├── types/
└── views/

- api - So this folder is used for containing the API layer of the application. It will have methods that are responsible mainly for performing API requests and communicating with a server.
- config - You can put any runtime config files for your app and also third party services. For example, if you use a service like Firebase or anything else for authentication, you will need to add configuration files and use them in your application. Just make sure not to confuse config with environmental variables, as anything that goes in here will be present in the build bundle.
- constans - you can put any constant variables that you use actually through the app. It's a good practice to capitalize your constants, as you can see in the example in here, just to distinguish them from other variables and localized constants in your applications.
- context - The context directory should contain any global level context state providers.
- helpers - any utilities and small reusable functions should go in here. For example functions to format, date, time, currency and so on.
- intl - displaying the content of an app in a format appropriate to the user's local. This content can include, but not to be limited to translated text or specific format of dates, time. For example, for the UK they use the d slash, m m slash, y, y y for the date format, but for the United States users they say m m dash d d okay, so stuff like that, you can keep them in the intl.
- layout - should have components that provide different layouts for your pages. For example, if you are building a dashboard application, you could render different layouts depending on if a user is logged in or not.
- services - in larger applications we might have complex business logic code that is used in a few different places. A code like this is a good candidate to be extracted from components in a place somewhere else.
- store - is responsible for files related to global state management. There are many state management solutions as as you know, that can be used for react projects such as Redux, Zustand, Jutai and many, many more.
- views - contains the root components. For example, if we have a page that is supposed to allow users to view products, we could have a component

## API Layer ans Async Operations

## API Layer with React-Query

- Fetching data with React-Query
- Updating Data with React-Query
- Pagination with React-Query
- Infinite Scroll with React-Query
- Query Cancellation with React-Query

## State Management Patterns

#### Immutable pdates with useImmer

Immer can be used in any context in which immutable data structures need to be used. For example in combination with React state, React or Redux reducers, or configuration management.

#### Cleaner reducer with useImmerReducer

## Perfomance Optimization

#### Code-Splitting and Lazy-Loading

#### useCallback hook to preserve referential integrity

#### Avoid rerenders with useMemo

#### State Collocation

Colocate state in React means that we need to keep our “states” as close as where relevant is possible and let's maintain/keep that practice that if we don't nee some “state” is a component anymore then let's just colocate that state where it needs to be.
