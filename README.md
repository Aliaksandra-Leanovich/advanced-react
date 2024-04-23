# Advanced React

## Design Patterns

Component Patterns:

- Layout Components
- Container Components
- Controlled and Uncontrolled Components
- Higher order components
- Custom Hooks
- Functional Programming in React

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
4. Recursive components
5. Pertial components
6. Composition
