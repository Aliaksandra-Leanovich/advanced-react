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
