```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Use functional update
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```