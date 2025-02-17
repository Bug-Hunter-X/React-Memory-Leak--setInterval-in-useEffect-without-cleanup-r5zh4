# React Memory Leak: setInterval in useEffect without cleanup

This repository demonstrates a common mistake in React applications: using `setInterval` within the `useEffect` hook without proper cleanup. This leads to memory leaks, especially when the component is unmounted. The solution shows how to correctly use `setInterval` with a cleanup function to prevent memory leaks.