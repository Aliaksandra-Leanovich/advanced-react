# Advanced React

## Design Patterns

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
