# rebuilding-react-hooks

## Table of contents

- [Overview](#overview)
- [Hypothesis](#hypothesis)

## Overview

Using the scientific method to better understand how the most common React hooks work.

## Hypothesis

If I find the root hook then I can rebuild every subsequent hook from that.

## What we know

- There is extensive documentation of the React Hooks API surface on [React.dev](https://react.dev/reference/react/hooks)
- There are extensive unit tests to validate behavior on [Reacts GitHub](https://github.com/facebook/react)
- [useRef test](https://github.com/facebook/react/blob/main/packages/react-reconciler/src/__tests__/useRef-test.internal.js)

## First Expirement

Under the assumption that the root hook is useReducer, we'll try to rebuild useRef, useState, useEffect, useMemo, and useCallback.

### Need to

- Build useReducer
- Construct unit tests
- Validate using the tests
