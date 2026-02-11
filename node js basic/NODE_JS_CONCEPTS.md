# Node.js Concepts

This repository contains beginner-friendly Node.js examples. Here are the core concepts demonstrated:

## 1) What is Node.js?
Node.js is a JavaScript runtime that lets you run JavaScript outside the browser. It is built on Chrome's V8 engine and is commonly used for servers, APIs, CLIs, and automation scripts.

## 2) Modules with `require`
Node.js uses built-in and custom modules to organize code.

Examples from this repo:
- `const fs = require('fs')` for file system operations.
- `const http = require('http')` for creating a web server.
- `const readline = require('readline')` for terminal input.

## 3) File System (synchronous)
In `readwritefilesyc.js`, the `fs` module is used to:
- read a text file with `fs.readFileSync`
- write to a text file with `fs.writeFileSync`

This is useful for understanding basic I/O before moving to asynchronous methods.

## 4) Creating an HTTP server
In `createserver.js`, Node's `http.createServer()` is used to:
- receive requests
- return HTML content as a response
- listen on port `8000`

This shows the foundation of backend development in Node.js.

## 5) Working with user input in CLI
In `app.js`, the `readline` module collects input from the terminal and handles close events.

This demonstrates how to build interactive command-line tools.

## 6) Serving static HTML
The template files in `templete/` show a basic page that can be returned by a server response.

## 7) Event-driven behavior
Node.js is event-driven. In `app.js`, the `close` event listener shows how Node reacts to events and executes callbacks.

---

## Quick Run Commands
From the `node js basic` directory:

```bash
node app.js
node readwritefilesyc.js
node createserver.js
```

Then open `http://127.0.0.1:8000` when the server is running.
